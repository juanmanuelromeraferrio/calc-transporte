'use strict';

var defaults = require('lodash.defaults');
var flowRight = require('lodash.flowright');
var forEach = require('lodash.foreach');
var utils = require('./utils');

var Transport = require('./transport');
var Benefit = require('./benefit');


var defaultOptions = {
    date: null,
    roundtrip: true,
    benefit: false,
    weekTimes: 5,
    trips: []
};

var maximumSube = 8.00;
var clone = flowRight(JSON.parse, JSON.stringify);

function CalcTransporte(values, benefitValues) {
    var self = this;
    self.transport = new Transport(values);
    self.benefit = new Benefit(benefitValues);
}

CalcTransporte.prototype.getTransports = function getTransports() {
    var self = this;
    return self.transport.getTransports();
}

CalcTransporte.prototype.getTrainLines = function getTrainLines() {
    var self = this;
    return self.transport.getTrainLines();
}

CalcTransporte.prototype.getPricesByDate = function getPricesByDate(date) {
    var self = this;
    return self.transport.getPricesByDate(date);
}

CalcTransporte.prototype.calculate = function calculate(options) {
    var self = this;

    // add missing parameters.
    options.date = utils.formatDate(options.date);
    options = defaults(clone(options || {}), defaultOptions);

    // prevent non desired values
    forEach(options, function (n, key) {
        var differentType = defaultOptions[key] != null && typeof n !== typeof defaultOptions[key]
        if (differentType) {
            n = defaultOptions[key];
            options[key] = defaultOptions[key];
        }
    });

    //variables

    var times = options.weekTimes * 4;
    var trips = createTrips(self, options);
    var result = {
        going: {
            cost: 0.00,
            costDaily: 0.00,
            savingDaily: 0.00,
            trip: []
        },
        returning: {
            cost: 0.00,
            costDaily: 0.00,
            savingDaily: 0.00,
            trip: []
        },
        discounts:
            {
                sube: 0.00,
                social: 0.00,
                subway: 0.00
            }
    };

    var indexTimes;
    var subwayTimes = 0;
    for (indexTimes = 0; indexTimes < times; indexTimes++) {
        trips.forEach(function (trip) {
            var price = trip.price;

            //Subway Discount
            if (trip.transport == 'subway') {
                subwayTimes++;

                if (options.benefit) {
                    var subwayBenefit = trip.socialBenefit;
                    if (subwayBenefit > 0) {
                        price = subwayBenefit;
                        result.discounts.social += trip.price - price;
                    }
                }

                var priceWithDiscountSubway = price * self.benefit.getSubwayBenefit(subwayTimes, trip.date);
                result.discounts.subway += price - priceWithDiscountSubway;
                price = priceWithDiscountSubway;

            } else {
                var price = price * trip.socialBenefit;
                result.discounts.social += trip.price - price;
            }

            //Sube Discount
            var priceWithDiscountSube = price * trip.subeBenefit;
            var _priceTrip = 0.00;
            var _discountSube = 0.00;
            if (price - priceWithDiscountSube < maximumSube) {
                _priceTrip = priceWithDiscountSube;
                _discountSube = price - priceWithDiscountSube;
            } else {
                _priceTrip = price - maximumSube;
                _discountSube = maximumSube;
            }

            result[trip.type].cost += _priceTrip;
            result.discounts.sube += _discountSube;

            if (indexTimes == 0) {
                result[trip.type].trip[trip.index - 1] = { transport: trip.transport, price: trip.price, priceWithDiscount: _priceTrip };
                result[trip.type].costDaily += _priceTrip;
                result[trip.type].savingDaily += trip.price - _priceTrip;
            }
        });
    }
    
    var final = {};
    final.goingDailyTotal = result.going.costDaily;
    final.goingDailySaving = result.going.savingDaily;
    final.returningDailyTotal = result.returning.costDaily;
    final.returningDailySaving = result.returning.savingDaily;
    final.savingMonthly = result.discounts.sube + result.discounts.social + result.discounts.subway;
    final.costMonthly = result.going.cost + result.returning.cost;
    final.goingTrip = result.going.trip;
    final.returningTrip = result.returning.trip;
    return final;
}

var createTrips = function (self, options) {
    var trips = [];

    var getPrices = false;
    var date = utils.formatDate(new Date());

    if (options.date != null) {
        date = options.date;
        getPrices = true;
    }
    trips = trips.concat(createTrip(self, options, options.trips, 'going', date, getPrices));
    trips = trips.concat(createTrip(self, options, options.trips.reverse(), 'returning', date, getPrices));

    return trips;
}

var createTrip = function (self, options, trips, type, date, getPrices) {

    var _trips = [];
    var index = 1;
    var subeNetworkIndex = 1;

    trips.forEach(function (trip) {
        var _trip = { transport: null, index: null, type: type, price: null, subeBenefit: 1, socialBenefit: 1, date: date }

        _trip.transport = trip.transport
        _trip.index = index;

        if (getPrices) {
            _trip.price = self.transport.getPriceByTransportLineDateAndId(trip.transport, trip.line, date, trip.id);
        } else {
            _trip.price = trip.price;
        }

        if (options.benefit) {
            _trip.socialBenefit = self.benefit.getSocialBenefit(trip.transport, date);
        }

        var dontApplySubeBenefit =
            (trip.transport == 'subway' && index > 1
                && options.trips[index - 2].transport == 'subway') || subeNetworkIndex > 6;

        if (!dontApplySubeBenefit) {
            _trip.subeBenefit = self.benefit.getSubeBenefit(subeNetworkIndex, date);
            subeNetworkIndex++;
        }

        _trips[index - 1] = _trip;
        index++;
    });

    return _trips;
}

module.exports = CalcTransporte;
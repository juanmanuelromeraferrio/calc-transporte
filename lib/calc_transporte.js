'use strict';

var fs = require('fs');
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
    var result = {};
    var date;
    var findPrices = false;

    if (options.date != null) {
        date = options.date;
        findPrices = true;
    } else {
        date = utils.formatDate(new Date());
    }

    var times = options.weekTimes * 4;

    var goingResult = getResultTrip(self, options, options.trips, times, date, findPrices, true);
    var returningResult = getResultTrip(self, options, options.trips.reverse(), times, date, findPrices, options.roundtrip);

    var total = goingResult.total;
    var totalDaily = options.roundtrip ? (total / times) * 2 : (total / times);
    var discountBenefitDaily = (goingResult.discountBenefit + returningResult.discountBenefit) / times;
    var totalMonthly = totalDaily * times;
    var discountBenefitMonthly = discountBenefitDaily * times;
    var discountSubeMonthly = goingResult.discountSube + returningResult.discountSube;
    var discountMonthly = discountSubeMonthly + discountBenefitMonthly;

    result.goingDailyTotal = goingResult.costDaily;
    result.goingDailySaving = goingResult.saving / times;
    result.returningDailyTotal = returningResult.costDaily;
    result.returningDailySaving = returningResult.saving / times;
    result.savingMonthly = discountMonthly;
    result.costMonthly = returningResult.cost + goingResult.cost;
    result.goingTrip = goingResult.trips;
    result.returningTrip = returningResult.trips;
    return result;
}

var getResultTrip = function (self, options, trips, times, date, findPrices, run) {

    var total = 0.00;
    var resultTrips = [];
    var subwayTimes = 0;
    var discountBenefit = 0.00;
    var discountSube = 0.00;
    var saving = 0.00;
    var cost = 0.00;
    var costDaily = 0.00;


    var indexTimes;
    if (run) {
        for (indexTimes = 0; indexTimes < times; indexTimes++) {

            var tripIndex = 1;
            var tripNetwork = 1;

            //iterate trips
            trips.forEach(function (trip) {
                if (findPrices) {
                    trip.price = self.transport.getPriceByTransportLineDateAndId(trip.transport, trip.line, date, trip.id);
                }

                var hasBenefit = options.benefit;
                var price = trip.price;

                var _discountTrip = 0.00;
                var _priceTrip = 0.00;

                //Cost without discount
                total += price;


                if (trip.transport == 'subway') {
                    subwayTimes++;
                    if (hasBenefit) {
                        var priceBenefit = self.benefit.getSocialBenefit(trip.transport, date);
                        if (priceBenefit > 0) {
                            _discountTrip += price - priceBenefit;
                            price = priceBenefit;
                        }
                    }
                    var discount = price * self.benefit.getSubwayBenefit(subwayTimes, date);
                    _discountTrip += price - discount;
                    discountBenefit += _discountTrip;
                    price = discount;
                } else if (hasBenefit) {
                    var discount = price * self.benefit.getSocialBenefit(trip.transport, date);
                    _discountTrip += price - discount;
                    discountBenefit += _discountTrip;
                    price = discount;
                }

                //Sube Discount
                var dontApplySubeBenefit =
                    (trip.transport == 'subway' && tripIndex > 1
                        && options.trips[tripIndex - 2].transport == 'subway') || tripNetwork > 6;

                var subeBenefit = 1;
                if (!dontApplySubeBenefit) {
                    subeBenefit = self.benefit.getSubeBenefit(tripNetwork, date);
                    tripNetwork++;
                }
                var discount = price * subeBenefit;

                //Going trip calc
                if (price - discount < maximumSube) {
                    _priceTrip = discount
                    _discountTrip = price - discount;
                } else {
                    _priceTrip = price - maximumSube;
                    _discountTrip += maximumSube;
                }

                cost += _priceTrip;
                discountSube += _discountTrip;
                saving += _discountTrip;

                if (indexTimes == 0) {
                    resultTrips[tripIndex - 1] = { transport: trip.transport, price: trip.price, priceWithDiscount: _priceTrip };
                    costDaily += _priceTrip;
                }

                tripIndex++;
            });
        }
    }


    var result = {};
    result.total = total;
    result.trips = resultTrips;
    result.discountBenefit = discountBenefit;
    result.discountSube = discountSube;
    result.saving = saving;
    result.cost = cost;
    result.costDaily = costDaily;
    return result;
}


module.exports = CalcTransporte;
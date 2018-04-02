'use strict';

var utils = require('./utils');
var defaults = require('lodash.defaults');
var flowRight = require('lodash.flowright');

var defaultBenefitValues = require('../data/benefit-values.json');

var clone = flowRight(JSON.parse, JSON.stringify);

function Benefit(values) {
    var self = this;
    values = defaults(clone(values || {}), defaultBenefitValues);
    self.values = values
}

Benefit.prototype.getSubeBenefit = function getSubeBenefit(trip, date) {
    var self = this;
    return getBenefit(self.values.sube, trip, date);
}

Benefit.prototype.getSubwayBenefit = function getSubwayBenefit(trip, date) {
    var self = this;
    return getBenefit(self.values.subway, trip, date);
}

Benefit.prototype.getSocialBenefit = function getSocialBenefit(transport, date) {
    var self = this;
    var result;
    
    var data = self.values.benefit1;
    if (transport == 'subway') {
        data = self.values.benefit2
    }

    var _date = utils.getClosestDate(date, data);
    if (_date > date) {
        return -1;
    } else {
        return data.find(function (element) {
            return element.date === _date;
        }).value;
    }
}

var getBenefit = function (values, index, date) {
    var result = 1;

    var _date = utils.getClosestDate(date, values);
    if (_date > date) {
        return result;
    } else {
        var dicounts = values.find(function (element) {
            return element.date === _date;
        }).values;

        dicounts.forEach(function (item) {
            if (index >= item.trip) {
                result = item.value;
            }
        });
    }

    return result;
}


module.exports = Benefit;
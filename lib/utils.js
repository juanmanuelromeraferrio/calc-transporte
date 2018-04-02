'use strict';

var formatDate = function (date) {
    if (date == null)
        return null;

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }

    return year + "-" + month;
}

var Comparator = function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

var getClosestDate = function (date, data) {
    var dates = data.map(function (o) { return o.date; })
    dates.sort(Comparator);
    return getNearest(dates, date);
}

var getNearest = function (array, item) {
    var nearest;
    var BreakException = {};

    try {
        array.forEach(function (x) {
            if (!nearest || item >= x) {
                nearest = x;
            } else {
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }

    return nearest;
}

module.exports = {
    formatDate: formatDate,
    Comparator: Comparator,
    getClosestDate: getClosestDate,
    getNearest: getNearest
}

[![Build Status](https://travis-ci.org/juanmanuelromeraferrio/calc-transporte.svg?branch=master)](https://travis-ci.org/juanmanuelromeraferrio/calc-transporte)

[![Coverage Status](https://coveralls.io/repos/github/juanmanuelromeraferrio/calc-transporte/badge.svg?branch=master)](https://coveralls.io/github/juanmanuelromeraferrio/calc-transporte?branch=master)

Calculadora de Transporte AMBA
=========

Biblioteca que permite calcular cuanto vas a gastar por transporte en Argentina en la region AMBA

## Install

    npm install calc-transporte

## Usage

```js
var CalcTransporte = require('calc-transporte');
var calcTransporte = new CalcTransporte();

var options = {
    roundtrip: true,
    benefit: false,
    weekTimes: 4,
    trips: [{ transport: "bus", price: 9.00, id: 0 },{ transport: "bus", price: 9.50, id: 2 }]
}

calcTransporte.calculate(options);

//Should be return
var result = {
    goingDailyTotal: 13.75,
    goingDailySaving: 4.75,
    returningDailyTotal: 14,
    returningDailySaving: 4.5,
    savingMonthly: 148,
    costMonthly: 444,
    goingTrip: [{transport:"bus",price:9,priceWithDiscount:9},{transport:"bus",price:9.5,priceWithDiscount:4.75}],
    returningTrip:[{transport:"bus",price:9.5,priceWithDiscount:9.5},{transport:"bus",price:9,priceWithDiscount:4.5}]
};

```
    
## Tests

  `npm test`

## MIT Licenced

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.calcTransporte = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "sube": [
    {
      "date": "2018-02-01",
      "values": [
        {
          "trip": 1,
          "value": 1
        },
        {
          "trip": 2,
          "value": 0.5
        },
        {
          "trip": 3,
          "value": 0.25
        }
      ]
    }
  ],
  "subway": [
    {
      "date": "2016-10-01",
      "values": [
        {
          "trip": 21,
          "value": 0.8
        },
        {
          "trip": 31,
          "value": 0.7
        },
        {
          "trip": 41,
          "value": 0.6
        }
      ]
    }
  ],
  "benefit1": [
    {
      "date": "1999-01-01",
      "value": 0.45
    }
  ],
  "benefit2": [
    {
      "date": "2016-05-01",
      "value": 4
    },
    {
      "date": "2018-05-01",
      "value": 6
    },
    {
      "date": "2018-07-01",
      "value": 7
    }
  ]
}

},{}],2:[function(require,module,exports){
module.exports={
  "bus": [
    {
      "date": "2010-01-01",
      "values": [
        {
          "id": "0",
          "price": 1.1
        },
        {
          "id": "4",
          "price": 1.75
        }
      ]
    },
    {
      "date": "2011-12-01",
      "values": [
        {
          "id": "0",
          "price": 1.5
        },
        {
          "id": "4",
          "price": 2.2
        }
      ]
    },
    {
      "date": "2014-01-01",
      "values": [
        {
          "id": "0",
          "price": 2.5
        },
        {
          "id": "1",
          "price": 2.7
        },
        {
          "id": "2",
          "price": 2.85
        },
        {
          "id": "3",
          "price": 3.9
        },
        {
          "id": "4",
          "price": 4.5
        }
      ]
    },
    {
      "date": "2014-07-01",
      "values": [
        {
          "id": "0",
          "price": 3.0
        },
        {
          "id": "1",
          "price": 3.25
        },
        {
          "id": "2",
          "price": 3.5
        },
        {
          "id": "3",
          "price": 4.0
        },
        {
          "id": "4",
          "price": 4.7
        }
      ]
    },
    {
      "date": "2016-04-01",
      "values": [
        {
          "id": "0",
          "price": 6.0
        },
        {
          "id": "1",
          "price": 6.25
        },
        {
          "id": "2",
          "price": 6.5
        },
        {
          "id": "3",
          "price": 6.75
        },
        {
          "id": "4",
          "price": 7.0
        }
      ]
    },
    {
      "date": "2018-02-01",
      "values": [
        {
          "id": "0",
          "price": 8.0
        },
        {
          "id": "1",
          "price": 8.25
        },
        {
          "id": "2",
          "price": 8.5
        },
        {
          "id": "3",
          "price": 9.0
        },
        {
          "id": "4",
          "price": 9.5
        }
      ]
    },
    {
      "date": "2018-04-01",
      "values": [
        {
          "id": "0",
          "price": 9.0
        },
        {
          "id": "1",
          "price": 9.25
        },
        {
          "id": "2",
          "price": 9.5
        },
        {
          "id": "3",
          "price": 10.25
        },
        {
          "id": "4",
          "price": 10.75
        }
      ]
    },
    {
      "date": "2018-06-01",
      "values": [
        {
          "id": "0",
          "price": 10.0
        },
        {
          "id": "1",
          "price": 10.5
        },
        {
          "id": "2",
          "price": 10.75
        },
        {
          "id": "3",
          "price": 11.25
        },
        {
          "id": "4",
          "price": 11.75
        }
      ]
    },
    {
      "date": "2018-08-15",
      "values": [
        {
          "id": "0",
          "price": 11.0
        },
        {
          "id": "1",
          "price": 11.75
        },
        {
          "id": "2",
          "price": 12.25
        },
        {
          "id": "3",
          "price": 13.0
        },
        {
          "id": "4",
          "price": 13.75
        }
      ]
    },
    {
      "date": "2018-09-15",
      "values": [
        {
          "id": "0",
          "price": 12.0
        },
        {
          "id": "1",
          "price": 13.0
        },
        {
          "id": "2",
          "price": 13.75
        },
        {
          "id": "3",
          "price": 14.5
        },
        {
          "id": "4",
          "price": 15.25
        }
      ]
    },
    {
      "date": "2018-10-15",
      "values": [
        {
          "id": "0",
          "price": 13.0
        },
        {
          "id": "1",
          "price": 14.25
        },
        {
          "id": "2",
          "price": 15.0
        },
        {
          "id": "3",
          "price": 15.75
        },
        {
          "id": "4",
          "price": 16.5
        }
      ]
    }
  ],
  "train": {
    "sanmartin": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 4.0
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.0
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 5.5
          },
          {
            "id": "1",
            "price": 6.75
          },
          {
            "id": "2",
            "price": 8.0
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 6.25
          },
          {
            "id": "1",
            "price": 7.5
          },
          {
            "id": "2",
            "price": 9.0
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 6.75
          },
          {
            "id": "1",
            "price": 8.25
          },
          {
            "id": "2",
            "price": 10.0
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 7.5
          },
          {
            "id": "1",
            "price": 9.5
          },
          {
            "id": "2",
            "price": 11.25
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 8.25
          },
          {
            "id": "1",
            "price": 10.25
          },
          {
            "id": "2",
            "price": 12.5
          }
        ]
      },
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 8.75
          },
          {
            "id": "1",
            "price": 11.0
          },
          {
            "id": "2",
            "price": 13.25
          }
        ]
      }
    ],
    "mitre": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 4.0
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.0
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 5.5
          },
          {
            "id": "1",
            "price": 6.75
          },
          {
            "id": "2",
            "price": 8.0
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 6.25
          },
          {
            "id": "1",
            "price": 7.5
          },
          {
            "id": "2",
            "price": 9.0
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 6.75
          },
          {
            "id": "1",
            "price": 8.25
          },
          {
            "id": "2",
            "price": 10.0
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 7.5
          },
          {
            "id": "1",
            "price": 9.5
          },
          {
            "id": "2",
            "price": 11.25
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 8.25
          },
          {
            "id": "1",
            "price": 10.25
          },
          {
            "id": "2",
            "price": 12.5
          }
        ]
      },
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 8.75
          },
          {
            "id": "1",
            "price": 11.0
          },
          {
            "id": "2",
            "price": 13.25
          }
        ]
      }
    ],
    "sarmiento": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 4.0
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.0
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 5.5
          },
          {
            "id": "1",
            "price": 6.75
          },
          {
            "id": "2",
            "price": 8.0
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 6.25
          },
          {
            "id": "1",
            "price": 7.5
          },
          {
            "id": "2",
            "price": 9.0
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 6.75
          },
          {
            "id": "1",
            "price": 8.25
          },
          {
            "id": "2",
            "price": 10.0
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 7.5
          },
          {
            "id": "1",
            "price": 9.5
          },
          {
            "id": "2",
            "price": 11.25
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 8.25
          },
          {
            "id": "1",
            "price": 10.25
          },
          {
            "id": "2",
            "price": 12.5
          }
        ]
      },
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 8.75
          },
          {
            "id": "1",
            "price": 11.0
          },
          {
            "id": "2",
            "price": 13.25
          }
        ]
      }
    ],
    "belgranosur": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 2.0
          },
          {
            "id": "1",
            "price": 2.4
          },
          {
            "id": "2",
            "price": 3.4
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 2.75
          },
          {
            "id": "1",
            "price": 3.25
          },
          {
            "id": "2",
            "price": 4.5
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 3.0
          },
          {
            "id": "1",
            "price": 3.75
          },
          {
            "id": "2",
            "price": 5.0
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 3.25
          },
          {
            "id": "1",
            "price": 4.0
          },
          {
            "id": "2",
            "price": 5.5
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 4.0
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.75
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 4.75
          },
          {
            "id": "1",
            "price": 5.75
          },
          {
            "id": "2",
            "price": 7.75
          }
        ]
      },
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 5.5
          },
          {
            "id": "1",
            "price": 6.5
          },
          {
            "id": "2",
            "price": 8.5
          }
        ]
      }
    ],
    "urquiza": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 2.0
          },
          {
            "id": "1",
            "price": 3.0
          },
          {
            "id": "2",
            "price": 3.6
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 3.0
          },
          {
            "id": "1",
            "price": 4.0
          },
          {
            "id": "2",
            "price": 5.0
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 3.25
          },
          {
            "id": "1",
            "price": 4.5
          },
          {
            "id": "2",
            "price": 5.5
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 3.5
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.0
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 4.25
          },
          {
            "id": "1",
            "price": 6.0
          },
          {
            "id": "2",
            "price": 7.25
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 5.0
          },
          {
            "id": "1",
            "price": 7.0
          },
          {
            "id": "2",
            "price": 8.5
          }
        ]
      },
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 5.75
          },
          {
            "id": "1",
            "price": 8.0
          },
          {
            "id": "2",
            "price": 9.5
          }
        ]
      }
    ],
    "belgranonorte": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 2.0
          },
          {
            "id": "1",
            "price": 2.4
          },
          {
            "id": "2",
            "price": 3.4
          },
          {
            "id": "3",
            "price": 3.5
          },
          {
            "id": "4",
            "price": 4.0
          },
          {
            "id": "5",
            "price": 4.8
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 2.75
          },
          {
            "id": "1",
            "price": 3.25
          },
          {
            "id": "2",
            "price": 4.5
          },
          {
            "id": "3",
            "price": 4.75
          },
          {
            "id": "4",
            "price": 5.5
          },
          {
            "id": "5",
            "price": 6.5
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 3.0
          },
          {
            "id": "1",
            "price": 3.75
          },
          {
            "id": "2",
            "price": 5.0
          },
          {
            "id": "3",
            "price": 5.25
          },
          {
            "id": "4",
            "price": 6.25
          },
          {
            "id": "5",
            "price": 7.25
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 3.25
          },
          {
            "id": "1",
            "price": 4.0
          },
          {
            "id": "2",
            "price": 5.5
          },
          {
            "id": "3",
            "price": 5.75
          },
          {
            "id": "4",
            "price": 6.75
          },
          {
            "id": "5",
            "price": 8.0
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 3.75
          },
          {
            "id": "1",
            "price": 4.5
          },
          {
            "id": "2",
            "price": 6.25
          },
          {
            "id": "3",
            "price": 6.5
          },
          {
            "id": "4",
            "price": 7.75
          },
          {
            "id": "5",
            "price": 9.25
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 4.25
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.75
          },
          {
            "id": "3",
            "price": 7.25
          },
          {
            "id": "4",
            "price": 8.5
          },
          {
            "id": "5",
            "price": 10.0
          }
        ]
      },
      ,
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 4.75
          },
          {
            "id": "1",
            "price": 5.5
          },
          {
            "id": "2",
            "price": 7.5
          },
          {
            "id": "3",
            "price": 8.0
          },
          {
            "id": "4",
            "price": 9.25
          },
          {
            "id": "5",
            "price": 11.0
          }
        ]
      }
    ],
    "roca": [
      {
        "date": "2016-04-01",
        "values": [
          {
            "id": "0",
            "price": 2.0
          },
          {
            "id": "1",
            "price": 3.0
          },
          {
            "id": "2",
            "price": 4.0
          }
        ]
      },
      {
        "date": "2018-02-01",
        "values": [
          {
            "id": "0",
            "price": 2.75
          },
          {
            "id": "1",
            "price": 4.0
          },
          {
            "id": "2",
            "price": 5.5
          }
        ]
      },
      {
        "date": "2018-04-01",
        "values": [
          {
            "id": "0",
            "price": 3.0
          },
          {
            "id": "1",
            "price": 4.5
          },
          {
            "id": "2",
            "price": 6.25
          }
        ]
      },
      {
        "date": "2018-06-01",
        "values": [
          {
            "id": "0",
            "price": 3.25
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.0
          }
        ]
      },
      {
        "date": "2018-08-15",
        "values": [
          {
            "id": "0",
            "price": 4.0
          },
          {
            "id": "1",
            "price": 5.0
          },
          {
            "id": "2",
            "price": 6.75
          }
        ]
      },
      {
        "date": "2018-09-15",
        "values": [
          {
            "id": "0",
            "price": 4.75
          },
          {
            "id": "1",
            "price": 5.75
          },
          {
            "id": "2",
            "price": 7.75
          }
        ]
      },
      {
        "date": "2018-10-15",
        "values": [
          {
            "id": "0",
            "price": 5.5
          },
          {
            "id": "1",
            "price": 6.5
          },
          {
            "id": "2",
            "price": 8.5
          }
        ]
      }
    ]
  },
  "subway": [
    {
      "date": "2016-10-01",
      "values": [
        {
          "id": "0",
          "price": 7.5
        }
      ]
    },
    {
      "date": "2018-08-01",
      "values": [
        {
          "id": "0",
          "price": 12.5
        }
      ]
    }
  ],
  "trolley": [
    {
      "date": "2016-10-01",
      "values": [
        {
          "id": "0",
          "price": 2.5
        }
      ]
    },
    {
      "date": "2018-08-01",
      "values": [
        {
          "id": "0",
          "price": 4.0
        }
      ]
    }
  ]
}

},{}],3:[function(require,module,exports){
"use strict";

module.exports = require("./lib/calc_transporte");

},{"./lib/calc_transporte":5}],4:[function(require,module,exports){
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
},{"../data/benefit-values.json":1,"./utils":7,"lodash.defaults":8,"lodash.flowright":9}],5:[function(require,module,exports){
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

                //No benefit in subway
                /* 
                if (options.benefit) {
                    var subwayBenefit = trip.socialBenefit;
                    if (subwayBenefit > 0) {
                        price = subwayBenefit;
                        result.discounts.social += trip.price - price;
                    }
                }
                */

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
    if(options.roundtrip) {
        trips = trips.concat(createTrip(self, options, options.trips.reverse(), 'returning', date, getPrices));
    }
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

        //No benefit in subway
        if (options.benefit && trip.transport != 'subway') {
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
},{"./benefit":4,"./transport":6,"./utils":7,"lodash.defaults":8,"lodash.flowright":9,"lodash.foreach":10}],6:[function(require,module,exports){
'use strict';

var defaultsValues = require('../data/default-values.json');
var defaults = require('lodash.defaults');
var flowRight = require('lodash.flowright');
var utils = require('./utils');

var clone = flowRight(JSON.parse, JSON.stringify);

function Transport(values) {
    var self = this;
    values = defaults(clone(values || {}), defaultsValues);
    self.values = values
}
Transport.prototype.getTransports = function getTransports() {
    var self = this;
    return Object.keys(self.values);
}

Transport.prototype.getTrainLines = function getTrainLines() {
    var self = this;
    return Object.keys(self.values.train);
}

Transport.prototype.getPricesByDate = function getPricesByDate(date) {
    var self = this;

    var transports = self.getTransports();
    var _result = {};


    transports.forEach(function (transport) {
        self.getPricesByTransportAndDate(transport, date, _result);
    });

    return _result;
}

Transport.prototype.getPricesByTransportAndDate = function getPricesByTransportAndDate(transport, date, _result) {
    var self = this;
    if (transport == 'train') {
        _result[transport] = {};
        var lines = self.getTrainLines();
        lines.forEach(function (line) {
            var _date = date;
            if (date === undefined || date == null) {
                _date = utils.formatDate(new Date());
            }

            _date = utils.getClosestDate(_date, self.values[transport][line]);
            _result[transport][line] = { date: _date, values: null };
            _result[transport][line].values = self.values[transport][line].find(function (element) {
                return element.date === _date;
            }).values;
        });
    } else {
        var _date = date;
        if (date === undefined || date == null) {
            _date = utils.formatDate(new Date());
        }
        _date = utils.getClosestDate(_date, self.values[transport]);
        _result[transport] = { date: _date, values: null };
        _result[transport].values = self.values[transport].find(function (element) {
            return element.date === _date;
        }).values;
    }

    return _result;
};

Transport.prototype.getPriceByTransportLineDateAndId = function getPriceByTransportLineDateAndId(transport, line, date, id) {
    var self = this;

    var transports = self.getTransports();
    var _result = {};
    self.getPricesByTransportAndDate(transport, date, _result);

    transports.forEach(function (transport) {
        self.getPricesByTransportAndDate(transport, date, _result);
    });

    var data;
    if (transport == 'train') {
        data = _result[transport][line].values;
    } else {
        data = _result[transport].values;
    }

    var ids = data.map(function (o) { return o.id; })
    ids.sort(utils.Comparator);

    var idToFind = utils.getNearest(ids, id);
    return data.find(function (element) {
        return element.id === idToFind;
    }).price;
}

module.exports = Transport;
},{"../data/default-values.json":2,"./utils":7,"lodash.defaults":8,"lodash.flowright":9}],7:[function(require,module,exports){
"use strict";

var formatDate = function(date) {
  if (date == null) return null;

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
};

var Comparator = function(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

var getClosestDate = function(date, data) {
  var dates = data.map(function(o) {
    return o.date;
  });
  dates.sort(Comparator);
  return getNearest(dates, date);
};

var getNearest = function(array, item) {
  var nearest;
  var BreakException = {};

  try {
    array.forEach(function(x) {
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
};

module.exports = {
  formatDate: formatDate,
  Comparator: Comparator,
  getClosestDate: getClosestDate,
  getNearest: getNearest
};

},{}],8:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;

},{}],9:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return baseRest(function(funcs) {
    funcs = baseFlatten(funcs, 1);

    var length = funcs.length,
        index = length;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      if (typeof funcs[index] != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    return function() {
      var index = 0,
          result = length ? funcs[index].apply(this, arguments) : arguments[0];

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight = createFlow(true);

module.exports = flowRight;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _([1, 2]).forEach(function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, typeof iteratee == 'function' ? iteratee : identity);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = forEach;

},{}]},{},[3])(3)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRhdGEvYmVuZWZpdC12YWx1ZXMuanNvbiIsImRhdGEvZGVmYXVsdC12YWx1ZXMuanNvbiIsImluZGV4LmpzIiwibGliL2JlbmVmaXQuanMiLCJsaWIvY2FsY190cmFuc3BvcnRlLmpzIiwibGliL3RyYW5zcG9ydC5qcyIsImxpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guZGVmYXVsdHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmZsb3dyaWdodC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guZm9yZWFjaC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN3NDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPXtcclxuICBcInN1YmVcIjogW1xyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE4LTAyLTAxXCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRyaXBcIjogMSxcclxuICAgICAgICAgIFwidmFsdWVcIjogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0cmlwXCI6IDIsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IDAuNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0cmlwXCI6IDMsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IDAuMjVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdLFxyXG4gIFwic3Vid2F5XCI6IFtcclxuICAgIHtcclxuICAgICAgXCJkYXRlXCI6IFwiMjAxNi0xMC0wMVwiLFxyXG4gICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJ0cmlwXCI6IDIxLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiAwLjhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidHJpcFwiOiAzMSxcclxuICAgICAgICAgIFwidmFsdWVcIjogMC43XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRyaXBcIjogNDEsXHJcbiAgICAgICAgICBcInZhbHVlXCI6IDAuNlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgXCJiZW5lZml0MVwiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjE5OTktMDEtMDFcIixcclxuICAgICAgXCJ2YWx1ZVwiOiAwLjQ1XHJcbiAgICB9XHJcbiAgXSxcclxuICBcImJlbmVmaXQyXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNS0wMVwiLFxyXG4gICAgICBcInZhbHVlXCI6IDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDUtMDFcIixcclxuICAgICAgXCJ2YWx1ZVwiOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE4LTA3LTAxXCIsXHJcbiAgICAgIFwidmFsdWVcIjogN1xyXG4gICAgfVxyXG4gIF1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgXCJidXNcIjogW1xyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDEwLTAxLTAxXCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxLjFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEuNzVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMTEtMTItMDFcIixcclxuICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEuNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMi4yXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE0LTAxLTAxXCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAyLjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDIuN1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMi44NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjNcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMy45XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA0LjVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMTQtMDctMDFcIixcclxuICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDMuMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMy4yNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMy41XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiM1wiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA0LjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDQuN1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNC0wMVwiLFxyXG4gICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogNi4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA2LjI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA2LjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDYuNzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDcuMFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wMi0wMVwiLFxyXG4gICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogOC4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA4LjI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA4LjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDkuMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogOS41XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE4LTA0LTAxXCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA5LjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDkuMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDkuNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjNcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMTAuMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEwLjc1XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE4LTA2LTAxXCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMC4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMC41XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMC43NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjNcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMTEuMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDExLjc1XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE4LTA4LTE1XCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMS4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMS43NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMTIuMjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEzLjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEzLjc1XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE4LTA5LTE1XCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMi4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMy4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxMy43NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjNcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMTQuNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMTUuMjVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMTAtMTVcIixcclxuICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEzLjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDE0LjI1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxNS4wXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiM1wiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiAxNS43NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogMTYuNVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgXCJ0cmFpblwiOiB7XHJcbiAgICBcInNhbm1hcnRpblwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE2LTA0LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wMi0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA0LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNy41XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDkuMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDYtMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDEwLjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA4LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDcuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA5LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTEuMjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA5LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDguMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTAuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTIuNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMTAtMTVcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAxMS4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDEzLjI1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJtaXRyZVwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE2LTA0LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wMi0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA0LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNy41XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDkuMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDYtMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDEwLjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA4LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDcuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA5LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTEuMjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA5LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDguMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTAuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTIuNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMTAtMTVcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAxMS4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDEzLjI1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJzYXJtaWVudG9cIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNC0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDItMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS41XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wNC0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA2LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDcuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA5LjBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA2LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC4yNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAxMC4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOC0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA3LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOS41XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDExLjI1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOS0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDEwLjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDEyLjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTEwLTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDguNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTEuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAxMy4yNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwiYmVsZ3Jhbm9zdXJcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxNi0wNC0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAyLjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMi40XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuNFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDItMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMi43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDQtMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMy4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wNi0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA4LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi43NVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDktMTVcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNC43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1Ljc1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDcuNzVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTEwLTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDUuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA2LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC41XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJ1cnF1aXphXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDQtMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMi4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjZcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTAyLTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wNC0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA2LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOC0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA3LjI1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOS0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNy4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDguNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMTAtMTVcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOS41XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJiZWxncmFub25vcnRlXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMDQtMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMi4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDIuNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMy41XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjVcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjhcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTAyLTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDIuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMy4yNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNC43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1XCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi41XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wNC0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMy43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS4yNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA2LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDcuMjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA2LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNC4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDUuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjNcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1Ljc1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1XCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOC0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjc1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA2LjI1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiM1wiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA3Ljc1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDkuMjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA5LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNy4yNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjRcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA4LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1XCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTAuMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgLFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0xMC0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0Ljc1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDUuNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA3LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIzXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogOC4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDkuMjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1XCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMTEuMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFwicm9jYVwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE2LTA0LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDIuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAzLjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNC4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wMi0wMVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiAyLjc1XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA0LTAxXCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDMuMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi4yNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDYtMDFcIixcclxuICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogMy4yNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjFcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIyXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi4wXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOC0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA0LjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS4wXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDYuNzVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcImRhdGVcIjogXCIyMDE4LTA5LTE1XCIsXHJcbiAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDQuNzVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNS43NVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA3Ljc1XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJkYXRlXCI6IFwiMjAxOC0xMC0xNVwiLFxyXG4gICAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgICAgXCJwcmljZVwiOiA1LjVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXHJcbiAgICAgICAgICAgIFwicHJpY2VcIjogNi41XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICBcInByaWNlXCI6IDguNVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgXCJzdWJ3YXlcIjogW1xyXG4gICAge1xyXG4gICAgICBcImRhdGVcIjogXCIyMDE2LTEwLTAxXCIsXHJcbiAgICAgIFwidmFsdWVzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiMFwiLFxyXG4gICAgICAgICAgXCJwcmljZVwiOiA3LjVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMTgtMDgtMDFcIixcclxuICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDEyLjVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdLFxyXG4gIFwidHJvbGxleVwiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwiZGF0ZVwiOiBcIjIwMTYtMTAtMDFcIixcclxuICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiaWRcIjogXCIwXCIsXHJcbiAgICAgICAgICBcInByaWNlXCI6IDIuNVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJkYXRlXCI6IFwiMjAxOC0wOC0wMVwiLFxyXG4gICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJpZFwiOiBcIjBcIixcclxuICAgICAgICAgIFwicHJpY2VcIjogNC4wXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9saWIvY2FsY190cmFuc3BvcnRlXCIpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJ2xvZGFzaC5kZWZhdWx0cycpO1xyXG52YXIgZmxvd1JpZ2h0ID0gcmVxdWlyZSgnbG9kYXNoLmZsb3dyaWdodCcpO1xyXG5cclxudmFyIGRlZmF1bHRCZW5lZml0VmFsdWVzID0gcmVxdWlyZSgnLi4vZGF0YS9iZW5lZml0LXZhbHVlcy5qc29uJyk7XHJcblxyXG52YXIgY2xvbmUgPSBmbG93UmlnaHQoSlNPTi5wYXJzZSwgSlNPTi5zdHJpbmdpZnkpO1xyXG5cclxuZnVuY3Rpb24gQmVuZWZpdCh2YWx1ZXMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhbHVlcyA9IGRlZmF1bHRzKGNsb25lKHZhbHVlcyB8fCB7fSksIGRlZmF1bHRCZW5lZml0VmFsdWVzKTtcclxuICAgIHNlbGYudmFsdWVzID0gdmFsdWVzXHJcbn1cclxuXHJcbkJlbmVmaXQucHJvdG90eXBlLmdldFN1YmVCZW5lZml0ID0gZnVuY3Rpb24gZ2V0U3ViZUJlbmVmaXQodHJpcCwgZGF0ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIGdldEJlbmVmaXQoc2VsZi52YWx1ZXMuc3ViZSwgdHJpcCwgZGF0ZSk7XHJcbn1cclxuXHJcbkJlbmVmaXQucHJvdG90eXBlLmdldFN1YndheUJlbmVmaXQgPSBmdW5jdGlvbiBnZXRTdWJ3YXlCZW5lZml0KHRyaXAsIGRhdGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBnZXRCZW5lZml0KHNlbGYudmFsdWVzLnN1YndheSwgdHJpcCwgZGF0ZSk7XHJcbn1cclxuXHJcbkJlbmVmaXQucHJvdG90eXBlLmdldFNvY2lhbEJlbmVmaXQgPSBmdW5jdGlvbiBnZXRTb2NpYWxCZW5lZml0KHRyYW5zcG9ydCwgZGF0ZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIFxyXG4gICAgdmFyIGRhdGEgPSBzZWxmLnZhbHVlcy5iZW5lZml0MTtcclxuICAgIGlmICh0cmFuc3BvcnQgPT0gJ3N1YndheScpIHtcclxuICAgICAgICBkYXRhID0gc2VsZi52YWx1ZXMuYmVuZWZpdDJcclxuICAgIH1cclxuXHJcbiAgICB2YXIgX2RhdGUgPSB1dGlscy5nZXRDbG9zZXN0RGF0ZShkYXRlLCBkYXRhKTtcclxuICAgIGlmIChfZGF0ZSA+IGRhdGUpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhLmZpbmQoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0ZSA9PT0gX2RhdGU7XHJcbiAgICAgICAgfSkudmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBnZXRCZW5lZml0ID0gZnVuY3Rpb24gKHZhbHVlcywgaW5kZXgsIGRhdGUpIHtcclxuICAgIHZhciByZXN1bHQgPSAxO1xyXG5cclxuICAgIHZhciBfZGF0ZSA9IHV0aWxzLmdldENsb3Nlc3REYXRlKGRhdGUsIHZhbHVlcyk7XHJcbiAgICBpZiAoX2RhdGUgPiBkYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGRpY291bnRzID0gdmFsdWVzLmZpbmQoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0ZSA9PT0gX2RhdGU7XHJcbiAgICAgICAgfSkudmFsdWVzO1xyXG5cclxuICAgICAgICBkaWNvdW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBpdGVtLnRyaXApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCZW5lZml0OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJ2xvZGFzaC5kZWZhdWx0cycpO1xyXG52YXIgZmxvd1JpZ2h0ID0gcmVxdWlyZSgnbG9kYXNoLmZsb3dyaWdodCcpO1xyXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2xvZGFzaC5mb3JlYWNoJyk7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxuXHJcbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuL3RyYW5zcG9ydCcpO1xyXG52YXIgQmVuZWZpdCA9IHJlcXVpcmUoJy4vYmVuZWZpdCcpO1xyXG5cclxuXHJcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGRhdGU6IG51bGwsXHJcbiAgICByb3VuZHRyaXA6IHRydWUsXHJcbiAgICBiZW5lZml0OiBmYWxzZSxcclxuICAgIHdlZWtUaW1lczogNSxcclxuICAgIHRyaXBzOiBbXVxyXG59O1xyXG5cclxudmFyIG1heGltdW1TdWJlID0gOC4wMDtcclxudmFyIGNsb25lID0gZmxvd1JpZ2h0KEpTT04ucGFyc2UsIEpTT04uc3RyaW5naWZ5KTtcclxuXHJcbmZ1bmN0aW9uIENhbGNUcmFuc3BvcnRlKHZhbHVlcywgYmVuZWZpdFZhbHVlcykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi50cmFuc3BvcnQgPSBuZXcgVHJhbnNwb3J0KHZhbHVlcyk7XHJcbiAgICBzZWxmLmJlbmVmaXQgPSBuZXcgQmVuZWZpdChiZW5lZml0VmFsdWVzKTtcclxufVxyXG5cclxuQ2FsY1RyYW5zcG9ydGUucHJvdG90eXBlLmdldFRyYW5zcG9ydHMgPSBmdW5jdGlvbiBnZXRUcmFuc3BvcnRzKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHNlbGYudHJhbnNwb3J0LmdldFRyYW5zcG9ydHMoKTtcclxufVxyXG5cclxuQ2FsY1RyYW5zcG9ydGUucHJvdG90eXBlLmdldFRyYWluTGluZXMgPSBmdW5jdGlvbiBnZXRUcmFpbkxpbmVzKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIHNlbGYudHJhbnNwb3J0LmdldFRyYWluTGluZXMoKTtcclxufVxyXG5cclxuQ2FsY1RyYW5zcG9ydGUucHJvdG90eXBlLmdldFByaWNlc0J5RGF0ZSA9IGZ1bmN0aW9uIGdldFByaWNlc0J5RGF0ZShkYXRlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gc2VsZi50cmFuc3BvcnQuZ2V0UHJpY2VzQnlEYXRlKGRhdGUpO1xyXG59XHJcblxyXG5DYWxjVHJhbnNwb3J0ZS5wcm90b3R5cGUuY2FsY3VsYXRlID0gZnVuY3Rpb24gY2FsY3VsYXRlKG9wdGlvbnMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBhZGQgbWlzc2luZyBwYXJhbWV0ZXJzLlxyXG4gICAgb3B0aW9ucy5kYXRlID0gdXRpbHMuZm9ybWF0RGF0ZShvcHRpb25zLmRhdGUpO1xyXG4gICAgb3B0aW9ucyA9IGRlZmF1bHRzKGNsb25lKG9wdGlvbnMgfHwge30pLCBkZWZhdWx0T3B0aW9ucyk7XHJcblxyXG4gICAgLy8gcHJldmVudCBub24gZGVzaXJlZCB2YWx1ZXNcclxuICAgIGZvckVhY2gob3B0aW9ucywgZnVuY3Rpb24gKG4sIGtleSkge1xyXG4gICAgICAgIHZhciBkaWZmZXJlbnRUeXBlID0gZGVmYXVsdE9wdGlvbnNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBuICE9PSB0eXBlb2YgZGVmYXVsdE9wdGlvbnNba2V5XVxyXG4gICAgICAgIGlmIChkaWZmZXJlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIG4gPSBkZWZhdWx0T3B0aW9uc1trZXldO1xyXG4gICAgICAgICAgICBvcHRpb25zW2tleV0gPSBkZWZhdWx0T3B0aW9uc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vdmFyaWFibGVzXHJcblxyXG4gICAgdmFyIHRpbWVzID0gb3B0aW9ucy53ZWVrVGltZXMgKiA0O1xyXG4gICAgdmFyIHRyaXBzID0gY3JlYXRlVHJpcHMoc2VsZiwgb3B0aW9ucyk7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIGdvaW5nOiB7XHJcbiAgICAgICAgICAgIGNvc3Q6IDAuMDAsXHJcbiAgICAgICAgICAgIGNvc3REYWlseTogMC4wMCxcclxuICAgICAgICAgICAgc2F2aW5nRGFpbHk6IDAuMDAsXHJcbiAgICAgICAgICAgIHRyaXA6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXR1cm5pbmc6IHtcclxuICAgICAgICAgICAgY29zdDogMC4wMCxcclxuICAgICAgICAgICAgY29zdERhaWx5OiAwLjAwLFxyXG4gICAgICAgICAgICBzYXZpbmdEYWlseTogMC4wMCxcclxuICAgICAgICAgICAgdHJpcDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2NvdW50czpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3ViZTogMC4wMCxcclxuICAgICAgICAgICAgICAgIHNvY2lhbDogMC4wMCxcclxuICAgICAgICAgICAgICAgIHN1YndheTogMC4wMFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbmRleFRpbWVzO1xyXG4gICAgdmFyIHN1YndheVRpbWVzID0gMDtcclxuICAgIGZvciAoaW5kZXhUaW1lcyA9IDA7IGluZGV4VGltZXMgPCB0aW1lczsgaW5kZXhUaW1lcysrKSB7XHJcbiAgICAgICAgdHJpcHMuZm9yRWFjaChmdW5jdGlvbiAodHJpcCkge1xyXG4gICAgICAgICAgICB2YXIgcHJpY2UgPSB0cmlwLnByaWNlO1xyXG5cclxuICAgICAgICAgICAgLy9TdWJ3YXkgRGlzY291bnRcclxuICAgICAgICAgICAgaWYgKHRyaXAudHJhbnNwb3J0ID09ICdzdWJ3YXknKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJ3YXlUaW1lcysrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vTm8gYmVuZWZpdCBpbiBzdWJ3YXlcclxuICAgICAgICAgICAgICAgIC8qIFxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmVuZWZpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJ3YXlCZW5lZml0ID0gdHJpcC5zb2NpYWxCZW5lZml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJ3YXlCZW5lZml0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9IHN1YndheUJlbmVmaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kaXNjb3VudHMuc29jaWFsICs9IHRyaXAucHJpY2UgLSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcmljZVdpdGhEaXNjb3VudFN1YndheSA9IHByaWNlICogc2VsZi5iZW5lZml0LmdldFN1YndheUJlbmVmaXQoc3Vid2F5VGltZXMsIHRyaXAuZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGlzY291bnRzLnN1YndheSArPSBwcmljZSAtIHByaWNlV2l0aERpc2NvdW50U3Vid2F5O1xyXG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcmljZVdpdGhEaXNjb3VudFN1YndheTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2UgPSBwcmljZSAqIHRyaXAuc29jaWFsQmVuZWZpdDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kaXNjb3VudHMuc29jaWFsICs9IHRyaXAucHJpY2UgLSBwcmljZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TdWJlIERpc2NvdW50XHJcbiAgICAgICAgICAgIHZhciBwcmljZVdpdGhEaXNjb3VudFN1YmUgPSBwcmljZSAqIHRyaXAuc3ViZUJlbmVmaXQ7XHJcbiAgICAgICAgICAgIHZhciBfcHJpY2VUcmlwID0gMC4wMDtcclxuICAgICAgICAgICAgdmFyIF9kaXNjb3VudFN1YmUgPSAwLjAwO1xyXG4gICAgICAgICAgICBpZiAocHJpY2UgLSBwcmljZVdpdGhEaXNjb3VudFN1YmUgPCBtYXhpbXVtU3ViZSkge1xyXG4gICAgICAgICAgICAgICAgX3ByaWNlVHJpcCA9IHByaWNlV2l0aERpc2NvdW50U3ViZTtcclxuICAgICAgICAgICAgICAgIF9kaXNjb3VudFN1YmUgPSBwcmljZSAtIHByaWNlV2l0aERpc2NvdW50U3ViZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF9wcmljZVRyaXAgPSBwcmljZSAtIG1heGltdW1TdWJlO1xyXG4gICAgICAgICAgICAgICAgX2Rpc2NvdW50U3ViZSA9IG1heGltdW1TdWJlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXN1bHRbdHJpcC50eXBlXS5jb3N0ICs9IF9wcmljZVRyaXA7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kaXNjb3VudHMuc3ViZSArPSBfZGlzY291bnRTdWJlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4VGltZXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3RyaXAudHlwZV0udHJpcFt0cmlwLmluZGV4IC0gMV0gPSB7IHRyYW5zcG9ydDogdHJpcC50cmFuc3BvcnQsIHByaWNlOiB0cmlwLnByaWNlLCBwcmljZVdpdGhEaXNjb3VudDogX3ByaWNlVHJpcCB9O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3RyaXAudHlwZV0uY29zdERhaWx5ICs9IF9wcmljZVRyaXA7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbdHJpcC50eXBlXS5zYXZpbmdEYWlseSArPSB0cmlwLnByaWNlIC0gX3ByaWNlVHJpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgZmluYWwgPSB7fTtcclxuICAgIGZpbmFsLmdvaW5nRGFpbHlUb3RhbCA9IHJlc3VsdC5nb2luZy5jb3N0RGFpbHk7XHJcbiAgICBmaW5hbC5nb2luZ0RhaWx5U2F2aW5nID0gcmVzdWx0LmdvaW5nLnNhdmluZ0RhaWx5O1xyXG4gICAgZmluYWwucmV0dXJuaW5nRGFpbHlUb3RhbCA9IHJlc3VsdC5yZXR1cm5pbmcuY29zdERhaWx5O1xyXG4gICAgZmluYWwucmV0dXJuaW5nRGFpbHlTYXZpbmcgPSByZXN1bHQucmV0dXJuaW5nLnNhdmluZ0RhaWx5O1xyXG4gICAgZmluYWwuc2F2aW5nTW9udGhseSA9IHJlc3VsdC5kaXNjb3VudHMuc3ViZSArIHJlc3VsdC5kaXNjb3VudHMuc29jaWFsICsgcmVzdWx0LmRpc2NvdW50cy5zdWJ3YXk7XHJcbiAgICBmaW5hbC5jb3N0TW9udGhseSA9IHJlc3VsdC5nb2luZy5jb3N0ICsgcmVzdWx0LnJldHVybmluZy5jb3N0O1xyXG4gICAgZmluYWwuZ29pbmdUcmlwID0gcmVzdWx0LmdvaW5nLnRyaXA7XHJcbiAgICBmaW5hbC5yZXR1cm5pbmdUcmlwID0gcmVzdWx0LnJldHVybmluZy50cmlwO1xyXG4gICAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVHJpcHMgPSBmdW5jdGlvbiAoc2VsZiwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRyaXBzID0gW107XHJcblxyXG4gICAgdmFyIGdldFByaWNlcyA9IGZhbHNlO1xyXG4gICAgdmFyIGRhdGUgPSB1dGlscy5mb3JtYXREYXRlKG5ldyBEYXRlKCkpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmRhdGUgIT0gbnVsbCkge1xyXG4gICAgICAgIGRhdGUgPSBvcHRpb25zLmRhdGU7XHJcbiAgICAgICAgZ2V0UHJpY2VzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRyaXBzID0gdHJpcHMuY29uY2F0KGNyZWF0ZVRyaXAoc2VsZiwgb3B0aW9ucywgb3B0aW9ucy50cmlwcywgJ2dvaW5nJywgZGF0ZSwgZ2V0UHJpY2VzKSk7XHJcbiAgICBpZihvcHRpb25zLnJvdW5kdHJpcCkge1xyXG4gICAgICAgIHRyaXBzID0gdHJpcHMuY29uY2F0KGNyZWF0ZVRyaXAoc2VsZiwgb3B0aW9ucywgb3B0aW9ucy50cmlwcy5yZXZlcnNlKCksICdyZXR1cm5pbmcnLCBkYXRlLCBnZXRQcmljZXMpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmlwcztcclxufVxyXG5cclxudmFyIGNyZWF0ZVRyaXAgPSBmdW5jdGlvbiAoc2VsZiwgb3B0aW9ucywgdHJpcHMsIHR5cGUsIGRhdGUsIGdldFByaWNlcykge1xyXG5cclxuICAgIHZhciBfdHJpcHMgPSBbXTtcclxuICAgIHZhciBpbmRleCA9IDE7XHJcbiAgICB2YXIgc3ViZU5ldHdvcmtJbmRleCA9IDE7XHJcblxyXG4gICAgdHJpcHMuZm9yRWFjaChmdW5jdGlvbiAodHJpcCkge1xyXG4gICAgICAgIHZhciBfdHJpcCA9IHsgdHJhbnNwb3J0OiBudWxsLCBpbmRleDogbnVsbCwgdHlwZTogdHlwZSwgcHJpY2U6IG51bGwsIHN1YmVCZW5lZml0OiAxLCBzb2NpYWxCZW5lZml0OiAxLCBkYXRlOiBkYXRlIH1cclxuXHJcbiAgICAgICAgX3RyaXAudHJhbnNwb3J0ID0gdHJpcC50cmFuc3BvcnRcclxuICAgICAgICBfdHJpcC5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgICBpZiAoZ2V0UHJpY2VzKSB7XHJcbiAgICAgICAgICAgIF90cmlwLnByaWNlID0gc2VsZi50cmFuc3BvcnQuZ2V0UHJpY2VCeVRyYW5zcG9ydExpbmVEYXRlQW5kSWQodHJpcC50cmFuc3BvcnQsIHRyaXAubGluZSwgZGF0ZSwgdHJpcC5pZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgX3RyaXAucHJpY2UgPSB0cmlwLnByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9ObyBiZW5lZml0IGluIHN1YndheVxyXG4gICAgICAgIGlmIChvcHRpb25zLmJlbmVmaXQgJiYgdHJpcC50cmFuc3BvcnQgIT0gJ3N1YndheScpIHtcclxuICAgICAgICAgICAgX3RyaXAuc29jaWFsQmVuZWZpdCA9IHNlbGYuYmVuZWZpdC5nZXRTb2NpYWxCZW5lZml0KHRyaXAudHJhbnNwb3J0LCBkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkb250QXBwbHlTdWJlQmVuZWZpdCA9XHJcbiAgICAgICAgICAgICh0cmlwLnRyYW5zcG9ydCA9PSAnc3Vid2F5JyAmJiBpbmRleCA+IDFcclxuICAgICAgICAgICAgICAgICYmIG9wdGlvbnMudHJpcHNbaW5kZXggLSAyXS50cmFuc3BvcnQgPT0gJ3N1YndheScpIHx8IHN1YmVOZXR3b3JrSW5kZXggPiA2O1xyXG5cclxuICAgICAgICBpZiAoIWRvbnRBcHBseVN1YmVCZW5lZml0KSB7XHJcbiAgICAgICAgICAgIF90cmlwLnN1YmVCZW5lZml0ID0gc2VsZi5iZW5lZml0LmdldFN1YmVCZW5lZml0KHN1YmVOZXR3b3JrSW5kZXgsIGRhdGUpO1xyXG4gICAgICAgICAgICBzdWJlTmV0d29ya0luZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfdHJpcHNbaW5kZXggLSAxXSA9IF90cmlwO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gX3RyaXBzO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbGNUcmFuc3BvcnRlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkZWZhdWx0c1ZhbHVlcyA9IHJlcXVpcmUoJy4uL2RhdGEvZGVmYXVsdC12YWx1ZXMuanNvbicpO1xyXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCdsb2Rhc2guZGVmYXVsdHMnKTtcclxudmFyIGZsb3dSaWdodCA9IHJlcXVpcmUoJ2xvZGFzaC5mbG93cmlnaHQnKTtcclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5cclxudmFyIGNsb25lID0gZmxvd1JpZ2h0KEpTT04ucGFyc2UsIEpTT04uc3RyaW5naWZ5KTtcclxuXHJcbmZ1bmN0aW9uIFRyYW5zcG9ydCh2YWx1ZXMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhbHVlcyA9IGRlZmF1bHRzKGNsb25lKHZhbHVlcyB8fCB7fSksIGRlZmF1bHRzVmFsdWVzKTtcclxuICAgIHNlbGYudmFsdWVzID0gdmFsdWVzXHJcbn1cclxuVHJhbnNwb3J0LnByb3RvdHlwZS5nZXRUcmFuc3BvcnRzID0gZnVuY3Rpb24gZ2V0VHJhbnNwb3J0cygpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzZWxmLnZhbHVlcyk7XHJcbn1cclxuXHJcblRyYW5zcG9ydC5wcm90b3R5cGUuZ2V0VHJhaW5MaW5lcyA9IGZ1bmN0aW9uIGdldFRyYWluTGluZXMoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc2VsZi52YWx1ZXMudHJhaW4pO1xyXG59XHJcblxyXG5UcmFuc3BvcnQucHJvdG90eXBlLmdldFByaWNlc0J5RGF0ZSA9IGZ1bmN0aW9uIGdldFByaWNlc0J5RGF0ZShkYXRlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIHRyYW5zcG9ydHMgPSBzZWxmLmdldFRyYW5zcG9ydHMoKTtcclxuICAgIHZhciBfcmVzdWx0ID0ge307XHJcblxyXG5cclxuICAgIHRyYW5zcG9ydHMuZm9yRWFjaChmdW5jdGlvbiAodHJhbnNwb3J0KSB7XHJcbiAgICAgICAgc2VsZi5nZXRQcmljZXNCeVRyYW5zcG9ydEFuZERhdGUodHJhbnNwb3J0LCBkYXRlLCBfcmVzdWx0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBfcmVzdWx0O1xyXG59XHJcblxyXG5UcmFuc3BvcnQucHJvdG90eXBlLmdldFByaWNlc0J5VHJhbnNwb3J0QW5kRGF0ZSA9IGZ1bmN0aW9uIGdldFByaWNlc0J5VHJhbnNwb3J0QW5kRGF0ZSh0cmFuc3BvcnQsIGRhdGUsIF9yZXN1bHQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICh0cmFuc3BvcnQgPT0gJ3RyYWluJykge1xyXG4gICAgICAgIF9yZXN1bHRbdHJhbnNwb3J0XSA9IHt9O1xyXG4gICAgICAgIHZhciBsaW5lcyA9IHNlbGYuZ2V0VHJhaW5MaW5lcygpO1xyXG4gICAgICAgIGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcclxuICAgICAgICAgICAgdmFyIF9kYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCB8fCBkYXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIF9kYXRlID0gdXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX2RhdGUgPSB1dGlscy5nZXRDbG9zZXN0RGF0ZShfZGF0ZSwgc2VsZi52YWx1ZXNbdHJhbnNwb3J0XVtsaW5lXSk7XHJcbiAgICAgICAgICAgIF9yZXN1bHRbdHJhbnNwb3J0XVtsaW5lXSA9IHsgZGF0ZTogX2RhdGUsIHZhbHVlczogbnVsbCB9O1xyXG4gICAgICAgICAgICBfcmVzdWx0W3RyYW5zcG9ydF1bbGluZV0udmFsdWVzID0gc2VsZi52YWx1ZXNbdHJhbnNwb3J0XVtsaW5lXS5maW5kKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRlID09PSBfZGF0ZTtcclxuICAgICAgICAgICAgfSkudmFsdWVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgX2RhdGUgPSBkYXRlO1xyXG4gICAgICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQgfHwgZGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIF9kYXRlID0gdXRpbHMuZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX2RhdGUgPSB1dGlscy5nZXRDbG9zZXN0RGF0ZShfZGF0ZSwgc2VsZi52YWx1ZXNbdHJhbnNwb3J0XSk7XHJcbiAgICAgICAgX3Jlc3VsdFt0cmFuc3BvcnRdID0geyBkYXRlOiBfZGF0ZSwgdmFsdWVzOiBudWxsIH07XHJcbiAgICAgICAgX3Jlc3VsdFt0cmFuc3BvcnRdLnZhbHVlcyA9IHNlbGYudmFsdWVzW3RyYW5zcG9ydF0uZmluZChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRlID09PSBfZGF0ZTtcclxuICAgICAgICB9KS52YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9yZXN1bHQ7XHJcbn07XHJcblxyXG5UcmFuc3BvcnQucHJvdG90eXBlLmdldFByaWNlQnlUcmFuc3BvcnRMaW5lRGF0ZUFuZElkID0gZnVuY3Rpb24gZ2V0UHJpY2VCeVRyYW5zcG9ydExpbmVEYXRlQW5kSWQodHJhbnNwb3J0LCBsaW5lLCBkYXRlLCBpZCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHZhciB0cmFuc3BvcnRzID0gc2VsZi5nZXRUcmFuc3BvcnRzKCk7XHJcbiAgICB2YXIgX3Jlc3VsdCA9IHt9O1xyXG4gICAgc2VsZi5nZXRQcmljZXNCeVRyYW5zcG9ydEFuZERhdGUodHJhbnNwb3J0LCBkYXRlLCBfcmVzdWx0KTtcclxuXHJcbiAgICB0cmFuc3BvcnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xyXG4gICAgICAgIHNlbGYuZ2V0UHJpY2VzQnlUcmFuc3BvcnRBbmREYXRlKHRyYW5zcG9ydCwgZGF0ZSwgX3Jlc3VsdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgZGF0YTtcclxuICAgIGlmICh0cmFuc3BvcnQgPT0gJ3RyYWluJykge1xyXG4gICAgICAgIGRhdGEgPSBfcmVzdWx0W3RyYW5zcG9ydF1bbGluZV0udmFsdWVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gX3Jlc3VsdFt0cmFuc3BvcnRdLnZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaWRzID0gZGF0YS5tYXAoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uaWQ7IH0pXHJcbiAgICBpZHMuc29ydCh1dGlscy5Db21wYXJhdG9yKTtcclxuXHJcbiAgICB2YXIgaWRUb0ZpbmQgPSB1dGlscy5nZXROZWFyZXN0KGlkcywgaWQpO1xyXG4gICAgcmV0dXJuIGRhdGEuZmluZChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmlkID09PSBpZFRvRmluZDtcclxuICAgIH0pLnByaWNlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBmb3JtYXREYXRlID0gZnVuY3Rpb24oZGF0ZSkge1xyXG4gIGlmIChkYXRlID09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIGlmIChtb250aCA8IDEwKSB7XHJcbiAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XHJcbiAgfVxyXG4gIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICBpZiAoZGF5IDwgMTApIHtcclxuICAgIGRheSA9IFwiMFwiICsgZGF5O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XHJcbn07XHJcblxyXG52YXIgQ29tcGFyYXRvciA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICBpZiAoYSA8IGIpIHJldHVybiAtMTtcclxuICBpZiAoYSA+IGIpIHJldHVybiAxO1xyXG4gIHJldHVybiAwO1xyXG59O1xyXG5cclxudmFyIGdldENsb3Nlc3REYXRlID0gZnVuY3Rpb24oZGF0ZSwgZGF0YSkge1xyXG4gIHZhciBkYXRlcyA9IGRhdGEubWFwKGZ1bmN0aW9uKG8pIHtcclxuICAgIHJldHVybiBvLmRhdGU7XHJcbiAgfSk7XHJcbiAgZGF0ZXMuc29ydChDb21wYXJhdG9yKTtcclxuICByZXR1cm4gZ2V0TmVhcmVzdChkYXRlcywgZGF0ZSk7XHJcbn07XHJcblxyXG52YXIgZ2V0TmVhcmVzdCA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtKSB7XHJcbiAgdmFyIG5lYXJlc3Q7XHJcbiAgdmFyIEJyZWFrRXhjZXB0aW9uID0ge307XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHgpIHtcclxuICAgICAgaWYgKCFuZWFyZXN0IHx8IGl0ZW0gPj0geCkge1xyXG4gICAgICAgIG5lYXJlc3QgPSB4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEJyZWFrRXhjZXB0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoZSAhPT0gQnJlYWtFeGNlcHRpb24pIHRocm93IGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmVhcmVzdDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGZvcm1hdERhdGU6IGZvcm1hdERhdGUsXHJcbiAgQ29tcGFyYXRvcjogQ29tcGFyYXRvcixcclxuICBnZXRDbG9zZXN0RGF0ZTogZ2V0Q2xvc2VzdERhdGUsXHJcbiAgZ2V0TmVhcmVzdDogZ2V0TmVhcmVzdFxyXG59O1xyXG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVmYXVsdHNgIHRvIGN1c3RvbWl6ZSBpdHMgYF8uYXNzaWduSW5gIHVzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBvYmpWYWx1ZSBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSBzb3VyY2UgdmFsdWUuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHBhcmVudCBvYmplY3Qgb2YgYG9ialZhbHVlYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbkluRGVmYXVsdHMob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCkge1xuICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgKGVxKG9ialZhbHVlLCBvYmplY3RQcm90b1trZXldKSAmJiAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSB7XG4gICAgcmV0dXJuIHNyY1ZhbHVlO1xuICB9XG4gIHJldHVybiBvYmpWYWx1ZTtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSBhcnJheTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgPyBzb3VyY2Vba2V5XSA6IG5ld1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KVxuICAgICAgKSB7XG4gICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduSW5gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGN1c3RvbWl6ZXJgXG4gKiB3aGljaCBpcyBpbnZva2VkIHRvIHByb2R1Y2UgdGhlIGFzc2lnbmVkIHZhbHVlcy4gSWYgYGN1c3RvbWl6ZXJgIHJldHVybnNcbiAqIGB1bmRlZmluZWRgLCBhc3NpZ25tZW50IGlzIGhhbmRsZWQgYnkgdGhlIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgXG4gKiBpcyBpbnZva2VkIHdpdGggZml2ZSBhcmd1bWVudHM6IChvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UpLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBhbGlhcyBleHRlbmRXaXRoXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gc291cmNlcyBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmFzc2lnbldpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUpIHtcbiAqICAgcmV0dXJuIF8uaXNVbmRlZmluZWQob2JqVmFsdWUpID8gc3JjVmFsdWUgOiBvYmpWYWx1ZTtcbiAqIH1cbiAqXG4gKiB2YXIgZGVmYXVsdHMgPSBfLnBhcnRpYWxSaWdodChfLmFzc2lnbkluV2l0aCwgY3VzdG9taXplcik7XG4gKlxuICogZGVmYXVsdHMoeyAnYSc6IDEgfSwgeyAnYic6IDIgfSwgeyAnYSc6IDMgfSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqL1xudmFyIGFzc2lnbkluV2l0aCA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplcikge1xuICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCwgY3VzdG9taXplcik7XG59KTtcblxuLyoqXG4gKiBBc3NpZ25zIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlXG4gKiBvYmplY3RzIHRvIHRoZSBkZXN0aW5hdGlvbiBvYmplY3QgZm9yIGFsbCBkZXN0aW5hdGlvbiBwcm9wZXJ0aWVzIHRoYXRcbiAqIHJlc29sdmUgdG8gYHVuZGVmaW5lZGAuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC5cbiAqIE9uY2UgYSBwcm9wZXJ0eSBpcyBzZXQsIGFkZGl0aW9uYWwgdmFsdWVzIG9mIHRoZSBzYW1lIHByb3BlcnR5IGFyZSBpZ25vcmVkLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5kZWZhdWx0c0RlZXBcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZhdWx0cyh7ICdhJzogMSB9LCB7ICdiJzogMiB9LCB7ICdhJzogMyB9KTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICovXG52YXIgZGVmYXVsdHMgPSBiYXNlUmVzdChmdW5jdGlvbihhcmdzKSB7XG4gIGFyZ3MucHVzaCh1bmRlZmluZWQsIGFzc2lnbkluRGVmYXVsdHMpO1xuICByZXR1cm4gYXBwbHkoYXNzaWduSW5XaXRoLCB1bmRlZmluZWQsIGFyZ3MpO1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZsb3dgIG9yIGBfLmZsb3dSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmxvdyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmxvdyhmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKGZ1bmNzKSB7XG4gICAgZnVuY3MgPSBiYXNlRmxhdHRlbihmdW5jcywgMSk7XG5cbiAgICB2YXIgbGVuZ3RoID0gZnVuY3MubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGxlbmd0aDtcblxuICAgIGlmIChmcm9tUmlnaHQpIHtcbiAgICAgIGZ1bmNzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIGlmICh0eXBlb2YgZnVuY3NbaW5kZXhdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgIHJlc3VsdCA9IGxlbmd0aCA/IGZ1bmNzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICByZXN1bHQgPSBmdW5jc1tpbmRleF0uY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZsb3dgIGV4Y2VwdCB0aGF0IGl0IGNyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0XG4gKiBpbnZva2VzIHRoZSBnaXZlbiBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAzLjAuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0gey4uLihGdW5jdGlvbnxGdW5jdGlvbltdKX0gW2Z1bmNzXSBUaGUgZnVuY3Rpb25zIHRvIGludm9rZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqIEBzZWUgXy5mbG93XG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHNxdWFyZShuKSB7XG4gKiAgIHJldHVybiBuICogbjtcbiAqIH1cbiAqXG4gKiB2YXIgYWRkU3F1YXJlID0gXy5mbG93UmlnaHQoW3NxdWFyZSwgXy5hZGRdKTtcbiAqIGFkZFNxdWFyZSgxLCAyKTtcbiAqIC8vID0+IDlcbiAqL1xudmFyIGZsb3dSaWdodCA9IGNyZWF0ZUZsb3codHJ1ZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmxvd1JpZ2h0O1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIGVsZW1lbnQuXG4gKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqICoqTm90ZToqKiBBcyB3aXRoIG90aGVyIFwiQ29sbGVjdGlvbnNcIiBtZXRob2RzLCBvYmplY3RzIHdpdGggYSBcImxlbmd0aFwiXG4gKiBwcm9wZXJ0eSBhcmUgaXRlcmF0ZWQgbGlrZSBhcnJheXMuIFRvIGF2b2lkIHRoaXMgYmVoYXZpb3IgdXNlIGBfLmZvckluYFxuICogb3IgYF8uZm9yT3duYCBmb3Igb2JqZWN0IGl0ZXJhdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAYWxpYXMgZWFjaFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKiBAc2VlIF8uZm9yRWFjaFJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8oWzEsIDJdKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gKiAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqIH0pO1xuICogLy8gPT4gTG9ncyBgMWAgdGhlbiBgMmAuXG4gKlxuICogXy5mb3JFYWNoKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICBjb25zb2xlLmxvZyhrZXkpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzICdhJyB0aGVuICdiJyAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKS5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUVhY2ggOiBiYXNlRWFjaDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgdHlwZW9mIGl0ZXJhdGVlID09ICdmdW5jdGlvbicgPyBpdGVyYXRlZSA6IGlkZW50aXR5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcbiJdfQ==

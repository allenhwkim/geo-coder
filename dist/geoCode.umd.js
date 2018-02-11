(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["geoCode"] = factory();
	else
		root["geoCode"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = serialize;
function serialize(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }return str.join("&");
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoCode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bing = __webpack_require__(2);

var _google = __webpack_require__(3);

var _openStreet = __webpack_require__(4);

var _opencage = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoCode = exports.GeoCode = function () {

  /**
   * @param {string} provider. default 'osm'. 'osm', 'google', 'bing', or 'opencage'
   * @param {object} options for each provider. api key as in 'key' is required for 'google', 'bing' and 'opencage'
   */
  function GeoCode() {
    var provider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'osm';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, GeoCode);

    this.provider = provider;
    this.options = options;
    this.klasses = { osm: _openStreet.OpenStreet, bing: _bing.Bing, google: _google.Google, opencage: _opencage.OpenCage };
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */


  _createClass(GeoCode, [{
    key: 'geolookup',
    value: function geolookup(address) {
      var klass = this.klasses[this.provider];
      var instance = new klass(this.options);
      return instance.geolookup(address);
    }

    /**
     * @param {number} lat, latitude
     * @param {number} lng, latitude
     * @returns {Promise} with an object format when successful
     */

  }, {
    key: 'reverse',
    value: function reverse(lat, lng) {
      var klass = this.klasses[this.provider];
      var instance = new klass(this.options);
      return instance.reverse(lat, lng);
    }
  }]);

  return GeoCode;
}();

typeof window !== 'undefined' && (window.GeoCode = GeoCode);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bing = exports.Bing = function () {

  /**
   * @param {object} options options for Bing geo lookup. e.g. `{key: XXXXX, includeNeighbourhood: 1, maxResult: 50}`
   */
  function Bing(options) {
    _classCallCheck(this, Bing);

    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */


  _createClass(Bing, [{
    key: 'geolookup',
    value: function geolookup(address) {
      var _this = this;

      var url = 'https://dev.virtualearth.net/REST/v1/Locations';
      var params = {
        query: address,
        key: this.options.key,
        includeNeighborhood: this.options.includeNeighborhood || 0,
        maxResults: this.options.maxResults || 10
      };

      return fetch(url + '?' + (0, _util.serialize)(params)).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this._handleResponse(json);
      });
    }

    /**
     * @param {number} lat, latitude
     * @param {number} lng, longitude
     * @returns {Promise} with an object format when successful
     */

  }, {
    key: 'reverse',
    value: function reverse(lat, lng) {
      var url = 'http://dev.virtualearth.net/REST/v1/Locations/' + lat + ',' + lng;
      var params = {
        includeNeighborhood: this.options.includeNeighborhood || 0,
        key: this.options.key
      };

      return fetch(url + '?' + (0, _util.serialize)(params)).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        var address = json['resourceSets'][0]['resources'][0]['name'];
        return {
          source: 'Bing',
          address: address,
          raw: json
        };
      });
    }
  }, {
    key: '_handleResponse',
    value: function _handleResponse(json) {
      var results = json['resourceSets'][0]['resources'];
      return results.map(function (result) {
        return {
          source: 'Bing',
          lng: parseFloat(result.point.coordinates[1]),
          lat: parseFloat(result.point.coordinates[0]),
          address: {
            name: result.name
          },
          formatted: result.address.formattedAddress,
          raw: result
        };
      });
    }
  }]);

  return Bing;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Google = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Google = exports.Google = function () {

  /**
   * @param {object} options options for Google geo lookup. e.g. `{key: XXXXX, language: 'en-US'}`
   */
  function Google(options) {
    _classCallCheck(this, Google);

    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */


  _createClass(Google, [{
    key: 'geolookup',
    value: function geolookup(address) {
      var _this = this;

      var url = 'https://maps.googleapis.com/maps/api/geocode/json';
      var params = {
        address: address,
        key: this.options.key,
        language: this.options.lang || 'en-US'
      };
      url = url + '?' + (0, _util.serialize)(params);

      return fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this._handleResponse(json);
      });
    }

    /**
     * @param {number} lat, latitude
     * @param {number} lng, longitude
     * @returns {Promise} with an object format when successful
     */

  }, {
    key: 'reverse',
    value: function reverse(lat, lng) {
      var url = 'https://maps.googleapis.com/maps/api/geocode/json';
      var params = {
        latlng: lat + ',' + lng,
        key: this.options.key,
        language: this.options.lang || 'en-US'
      };

      return fetch(url + '?' + (0, _util.serialize)(params)).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return {
          source: 'Google',
          address: json['results'][0]['formatted_address'],
          raw: json
        };
      });
    }
  }, {
    key: '_handleResponse',
    value: function _handleResponse(json) {
      var results = json.results && json.results.length ? json.results : undefined;
      if (results) {
        /*
         * @param {Array} details - address_components
         */
        var getDetails = function getDetails(details) {
          var name = void 0,
              road = void 0,
              postcode = void 0,
              city = void 0,
              state = void 0,
              country = void 0;
          var anyMatchInArray = function anyMatchInArray(source, target) {
            return source.some(function (each) {
              return target.indexOf(each) >= 0;
            });
          };

          details.forEach(function (detail) {
            if (anyMatchInArray(detail.types, ['point_of_interest', 'establishment', 'natural_feature', 'airport'])) {
              name = detail.long_name;
            } else if (anyMatchInArray(detail.types, ['street_address', 'route', 'sublocality_level_5', 'intersection'])) {
              road = detail.long_name;
            } else if (anyMatchInArray(detail.types, ['postal_code'])) {
              postcode = detail.long_name;
            } else if (anyMatchInArray(detail.types, ['locality'])) {
              city = detail.long_name;
            } else if (anyMatchInArray(detail.types, ['administrative_area_level_1'])) {
              state = detail.long_name;
            } else if (anyMatchInArray(detail.types, ['country'])) {
              country = detail.long_name;
            }
          });

          if (name || road || postcode || city || state || country) {
            return { name: name, road: road, postcode: postcode, city: city, state: state, country: country };
          } else {
            return null;
          }
        };

        var array = [];

        results.forEach(function (result) {
          var details = getDetails(result.address_components);

          if (details) {
            array.push({
              source: 'Google',
              lng: parseFloat(result.geometry.location.lng),
              lat: parseFloat(result.geometry.location.lat),
              address: {
                name: details.name || '',
                postalCode: details.postcode || '',
                road: details.road || '',
                city: details.city || '',
                state: details.state || '',
                country: details.country || ''
              },
              formatted: result.formatted_address,
              raw: result
            });
          }
        });

        return array;
      } else {
        throw "Invalid response" + json;
      }
    }
  }]);

  return Google;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenStreet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenStreet = exports.OpenStreet = function () {

  /**
   * @param {object} options options for OpenStreet geo lookup.
   *   `e.g. {key: XXXXX, limit: 15, zoom: 18, addressdetail: 1, lang: 'en-US'}`
   */
  function OpenStreet(options) {
    _classCallCheck(this, OpenStreet);

    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */


  _createClass(OpenStreet, [{
    key: 'geolookup',
    value: function geolookup(address) {
      var _this = this;

      var url = 'https://nominatim.openstreetmap.org/search/';
      var params = {
        q: address,
        format: 'json',
        addressdetails: 1,
        limit: this.options.limit || 10,
        countrycodes: this.options.countrycodes || '',
        'accept-language': this.options.lang || 'en-US'
      };
      url = url + '?' + (0, _util.serialize)(params);

      return fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this._handleResponse(json);
      });
    }

    /**
     * @param {number} lat, latitude
     * @param {number} lng, latitude
     * @returns {Promise} with an object format when successful
     */

  }, {
    key: 'reverse',
    value: function reverse(lat, lng) {
      var url = 'https://nominatim.openstreetmap.org/reverse';
      var params = {
        format: 'json',
        lat: lat,
        lon: lng,
        zoom: this.options.zoom || 18,
        addressdetails: this.options.addressdetail || 1,
        'accept-language': this.options.lang || 'en-US'
      };
      url = url + '?' + (0, _util.serialize)(params);

      return fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return {
          source: 'OpenStreetMap',
          address: json['display_name'],
          raw: json
        };
      });
    }
  }, {
    key: '_handleResponse',
    value: function _handleResponse(json) {
      return json.map(function (result) {
        return {
          source: 'OpenStreetMap',
          lng: parseFloat(result.lon),
          lat: parseFloat(result.lat),
          address: {
            name: result.address.neighbourhood || '',
            road: result.address.road || '',
            postalCode: result.address.postcode,
            city: result.address.city || result.address.town,
            state: result.address.state,
            country: result.address.country
          },
          formatted: result.display_name,
          raw: result
        };
      });
    }
  }]);

  return OpenStreet;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenCage = exports.OpenCage = function () {

  /**
   * @param {object} options options for OpenCage geo lookup. e.g. `{key: XXXXX, language: 'en-US'}`
   */
  function OpenCage(options) {
    _classCallCheck(this, OpenCage);

    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */


  _createClass(OpenCage, [{
    key: 'geolookup',
    value: function geolookup(address) {
      var _this = this;

      var url = 'https://api.opencagedata.com/geocode/v1/json';
      var params = {
        q: address,
        key: this.options.key,
        language: this.options.lang || 'en-US'
      };
      url = url + '?' + (0, _util.serialize)(params);

      return fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return _this._handleResponse(json);
      });
    }

    /**
     * @param {number} lat, latitude
     * @param {number} lng, longitude
     * @returns {Promise} with an object format when successful
     */

  }, {
    key: 'reverse',
    value: function reverse(lat, lng) {
      var url = 'https://api.opencagedata.com/geocode/v1/json';
      var params = {
        q: lat + ',' + lng,
        key: this.options.key,
        language: this.options.lang || 'en-US'
      };

      return fetch(url + '?' + (0, _util.serialize)(params)).then(function (resp) {
        return resp.json();
      }).then(function (json) {
        return {
          source: 'OpenCage',
          address: json['results'][0]['formatted'],
          raw: json
        };
      });
    }
  }, {
    key: '_handleResponse',
    value: function _handleResponse(json) {
      var results = json.results && json.results.length ? json.results : undefined;

      if (results) {
        var array = [];

        results.forEach(function (result) {
          array.push({
            source: 'OpenCage',
            lng: parseFloat(result.geometry.lng),
            lat: parseFloat(result.geometry.lat),
            address: results.components,
            formatted: result.formatted,
            raw: result
          });
        });

        return array;
      } else {
        throw "Invalid response" + json;
      }
    }
  }]);

  return OpenCage;
}();

/***/ })
/******/ ]);
});
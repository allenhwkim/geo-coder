(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("whatwg-fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["whatwg-fetch"], factory);
	else if(typeof exports === 'object')
		exports["geoCode"] = factory(require("whatwg-fetch"));
	else
		root["geoCode"] = factory(root["whatwg-fetch"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = serialize;
function serialize(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bing_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_google_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_open_street_js__ = __webpack_require__(6);




class GeoCode {

  constructor(provider = 'osm', options = {}) {
    this.provider = provider;
    this.options = options;
    this.klasses = {osm: __WEBPACK_IMPORTED_MODULE_2__providers_open_street_js__["a" /* OpenStreet */], bing: __WEBPACK_IMPORTED_MODULE_0__providers_bing_js__["a" /* Bing */], google: __WEBPACK_IMPORTED_MODULE_1__providers_google_js__["a" /* Google */]};
  }

  geolookup(address) {
    let klass = this.klasses[this.provider];
    let instance = new klass(this.options);
    return instance.geolookup(address);
  }

  reverse(lat, lng) {
    let klass = this.klasses[this.provider];
    let instance = new klass(this.options);
    return instance.reverse(lat, lng);
  }

}
/* harmony export (immutable) */ __webpack_exports__["GeoCode"] = GeoCode;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__);



/**
 * Bing geolookup / reverse lookup
 */
class Bing {

  constructor(options) {
    this.options = options || {};
  }

  geolookup(address) {
    let url = 'https://dev.virtualearth.net/REST/v1/Locations';
    let params = {
      query: address,
      key: this.options.key,
      includeNeighborhood: this.options.includeNeighborhood || 0,
      maxResults: this.options.maxResults || 10
    };

    return fetch(`${url}?${Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* serialize */])(params)}`)
      .then(resp => resp.json())
      .then(json => this._handleResponse(json))
  }

  reverse(lat, lng) {
    let url = 
      `http://dev.virtualearth.net/REST/v1/Locations/${lat},${lng}`;
    let params = {
      includeNeighborhood: this.options.includeNeighborhood || 0,
      key: this.options.key
    };

    return fetch(`${url}?${Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* serialize */])(params)}`)
      .then(resp => resp.json())
      .then(json => {
        let address = json['resourceSets'][0]['resources'][0]['name'];
        return {
          source: 'Bing',
          address: address,
          raw: json
        };
      });
  }

  _handleResponse(json) {
    let results = json['resourceSets'][0]['resources'];
    return results.map(result => {
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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bing;

 

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__);



class Google {

  constructor(options) {
    this.options = options || {};
  }

  geolookup(address) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json';
    let params = {
      address: address,
      key: this.options.key,
      language: this.options.lang || 'en-US'
    };
    url = `${url}?${Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* serialize */])(params)}`

    return fetch(url)
      .then(resp => resp.json())
      .then(json => this._handleResponse(json))
  }

  reverse(lat, lng) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json';
    let params = {
      latlng: `${lat},${lng}`,
      key: this.options.key,
      language: this.options.lang || 'en-US'
    };

    return fetch(`${url}?${Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* serialize */])(params)}`)
      .then(resp => resp.json())
      .then(json => {
        return {
          source: 'Google',
          address: json['results'][0]['formatted_address'],
          raw: json
        }
      })
  }

  _handleResponse(json) {
    let results = json.results && json.results.length ? json.results : undefined;
    if (results) {
      /*
       * @param {Array} details - address_components
       */
      const getDetails = function(details) {
        let name, road, postcode, city, state, country;
        let anyMatchInArray = function(source, target) {
          return source.some(each => target.indexOf(each) >= 0);
        };

        details.forEach(detail => {
          if (anyMatchInArray(detail.types, [ 'point_of_interest', 'establishment', 'natural_feature', 'airport' ])) {
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
          return {name, road, postcode, city, state, country};
        } else {
          return null;
        }
      };

      let array = [];

      results.forEach(result => {
        let details = getDetails(result.address_components);

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

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Google;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_whatwg_fetch__);



class OpenStreet {
  
  constructor(options) {
    this.options = options || {};
  }

  geolookup(address) {
    let url = 'https://nominatim.openstreetmap.org/search/';
    let params = {
      q: address,
      format: 'json',
      addressdetails: 1,
      limit: this.options.limit || 10,
      countrycodes: this.options.countrycodes || '',
      'accept-language': this.options.lang || 'en-US'
    };
    url = `${url}?${Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* serialize */])(params)}`

    return fetch(url)
      .then(resp => resp.json())
      .then(json => 
        json['map'](result => {
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
          }
        })
      );
  }

  reverse(lat, lng) {
    let url = 'https://nominatim.openstreetmap.org/reverse';
    let params = {
      format: 'json',
      lat: lat,
      lon: lng,
      zoom: this.options.zoom || 18,
      addressdetails: this.options.addressdetail || 1,
      'accept-language': this.options.lang || 'en-US'
    };
    url = `${url}?${Object(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* serialize */])(params)}`

    return fetch(url)
      .then(resp => resp.json())
      .then(json => {
          return {
            source: 'OpenStreetMap',
            address: json['display_name'],
            raw: json
          }
        }
      );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OpenStreet;



/***/ })
/******/ ]);
});

import {serialize} from './util.js';
import 'whatwg-fetch';

export class Google {

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
    url = `${url}?${serialize(params)}`

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

    return fetch(`${url}?${serialize(params)}`)
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
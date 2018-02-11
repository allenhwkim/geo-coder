import {serialize} from './util.js';

export class OpenCage {

  /**
   * @param {object} options options for OpenCage geo lookup. e.g. `{key: XXXXX, language: 'en-US'}`
   */
  constructor(options) {
    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */
  geolookup(address) {
    let url = 'https://api.opencagedata.com/geocode/v1/json';
    let params = {
      q: address,
      key: this.options.key,
      language: this.options.lang || 'en-US'
    };
    url = `${url}?${serialize(params)}`

    return fetch(url)
      .then(resp => resp.json())
      .then(json => this._handleResponse(json))
  }

  /**
   * @param {number} lat, latitude
   * @param {number} lng, longitude
   * @returns {Promise} with an object format when successful
   */
  reverse(lat, lng) {
    let url = 'https://api.opencagedata.com/geocode/v1/json';
    let params = {
      q: `${lat},${lng}`,
      key: this.options.key,
      language: this.options.lang || 'en-US'
    };

    return fetch(`${url}?${serialize(params)}`)
      .then(resp => resp.json())
      .then(json => {
        return {
          source: 'OpenCage',
          address: json['results'][0]['formatted'],
          raw: json
        }
      })
  }

  _handleResponse(json) {
    let results = json.results && json.results.length ? json.results : undefined;

    if (results) {
      let array = [];

      results.forEach(result => {
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

}

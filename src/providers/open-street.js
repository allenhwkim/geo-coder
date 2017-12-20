import {serialize} from './util.js';

export class OpenStreet {
  
  /**
   * @param {object} options options for OpenStreet geo lookup.
   *   `e.g. {key: XXXXX, limit: 15, zoom: 18, addressdetail: 1, lang: 'en-US'}`
   */
  constructor(options) {
    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */
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
    url = `${url}?${serialize(params)}`

    return fetch(url)
      .then(resp => resp.json())
      .then(json => this._handleResponse())
  }

  /**
   * @param {number} lat, latitude
   * @param {number} lng, latitude
   * @returns {Promise} with an object format when successful
   */
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
    url = `${url}?${serialize(params)}`

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

  _handleResponse(json) {
    return json.map(result => {
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
    });
  }
}

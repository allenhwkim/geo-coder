import {serialize, jsonp} from './util.js';

export class Bing {

  /**
   * @param {object} options options for Bing geo lookup. e.g. `{key: XXXXX, includeNeighbourhood: 1, maxResult: 50}`
   */
  constructor(options) {
    this.options = options || {};
  }

  /**
   * @param {string} address. e.g. 'brampton, on'
   * @returns {Promise} with an array format when successful
   */
  geolookup(address) {
    let url = 'https://dev.virtualearth.net/REST/v1/Locations';
    let params = {
      query: address,
      key: this.options.key,
      includeNeighborhood: this.options.includeNeighborhood || 0,
      maxResults: this.options.maxResults || 10
    };

    return fetch(`${url}?${serialize(params)}`)
      .then(resp => resp.json())
      .then(json => this._handleResponse(json))
  }

  /**
   * @param {number} lat, latitude
   * @param {number} lng, longitude
   * @returns {Promise} with an object format when successful
   */
  reverse(lat, lng) {
    let url = 
      `http://dev.virtualearth.net/REST/v1/Locations/${lat},${lng}`;
    let params = {
      includeNeighborhood: this.options.includeNeighborhood || 0,
      key: this.options.key
    };

    return fetch(`${url}?${serialize(params)}`)
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
 
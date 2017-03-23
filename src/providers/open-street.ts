import {serialize} from './index';
/**
 * @class OpenStreet
 */

export class OpenStreet {
  options: any; 
  
  constructor(options) {
    this.options = options || {};
  }

  geolookup(address) {
    let url: string = 'https://nominatim.openstreetmap.org/search/';
    let params: any = {
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
      .then(json => 
        json['map'](result => {
          return {
            source: 'OpenStreetMap',
            lon: parseFloat(result.lon),
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

  reverse(lat, lon) {
    let url: string = 'https://nominatim.openstreetmap.org/reverse';
    let params: any = {
      format: 'json',
      lat: lat,
      lon: lon,
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
}

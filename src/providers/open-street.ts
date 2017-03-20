/**
 * @class OpenStreet
 */
export class OpenStreet {
  
  options: any; 
  
  constructor(options) {
    this.options = options || {};
  }

  // geolookup(address) {
  //   url = 'https://nominatim.openstreetmap.org/search/';
  //   params = {
  //     q: address,
  //     format: 'json',
  //     addressdetails: 1,
  //     limit: this.options.limit || 10,
  //     countrycodes: this.options.countrycodes || '',
  //     'accept-language': this.options.lang || 'en-US'
  //   };

  //   return fetch(url)
  //     .then(resp => response.json())
  //     .then(json => 
  //       json.map(result => {
  //         lon: result.lon,
  //         lat: result.lat,
  //         address: {
  //           name: result.address.neighbourhood || '',
  //           road: result.address.road || '',
  //           postalCode: result.address.postcode,
  //           city: result.address.city || result.address.town,
  //           state: result.address.state,
  //           country: result.address.country
  //         },
  //         formatted: result.display_name,
  //         raw: result
  //       })
  //     );
  // }

  getParameters(address) {
    return {
      url: 'https://nominatim.openstreetmap.org/search/',
      params: {
        q: address,
        format: 'json',
        addressdetails: 1,
        limit: this.options.limit || 10,
        countrycodes: this.options.countrycodes || '',
        'accept-language': this.options.lang || 'en-US'
      }
    };
  }

  handleResponse(results) {
    if (results) {
      return results.map(result => ({
        lon: result.lon,
        lat: result.lat,
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
      }));
    } else {
      return undefined;
    }
  }

  getReverseGeolookupParameters(lat, lon) {
    return {
      url: 'https://nominatim.openstreetmap.org/reverse',
      params: {
        format: this.options.format || 'json',
        lat: lat,
        lon: lon,
        zoom: this.options.zoom || 18,
        addressdetails: this.options.addressdetail || 1,
        'accept-language': this.options.lang || 'en-US'
      }
    };
  }

}

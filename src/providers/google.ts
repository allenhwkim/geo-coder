
/**
 * @class Google
 */
const name = [ 'point_of_interest', 'establishment', 'natural_feature', 'airport' ];
const road = [ 'street_address', 'route', 'sublocality_level_5', 'intersection' ];
const postcode = ['postal_code'];
const city = ['locality'];
const state = ['administrative_area_level_1'];
const country = ['country'];

function anyMatchInArray(source, target) {
  return source.some(each => target.indexOf(each) >= 0);
}

function anyItemHasValue(obj, has = false) {
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (!this.isEmpty(obj[key])) has = true;
  });
  return has;
}

export class Google {

  getParameters(options) {
    return {
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      params: {
        address: options.query,
        key: options.key,
        language: options.lang || 'en-US'
      }
    };
  }

  handleResponse(results) {
    results = results.results && results.results.length ? results.results : undefined;
    if (results.results && results.results.length ) {
      results = results.results;

      /*
       * @param {Array} details - address_components
       */
      const getDetails = details => {
        let parts = {
          name: '',
          road: '',
          postcode: '',
          city: '',
          state: '',
          country: ''
        };
        details.forEach(detail => {
          if (anyMatchInArray(detail.types, name)) {
            parts.name = detail.long_name;
          } else if (anyMatchInArray(detail.types, road)) {
            parts.road = detail.long_name;
          } else if (anyMatchInArray(detail.types, postcode)) {
            parts.postcode = detail.long_name;
          } else if (anyMatchInArray(detail.types, city)) {
            parts.city = detail.long_name;
          } else if (anyMatchInArray(detail.types, state)) {
            parts.state = detail.long_name;
          } else if (anyMatchInArray(detail.types, country)) {
            parts.country = detail.long_name;
          }
        });
        return parts;
      };

      let array = [];

      results.forEach(result => {
        let details = getDetails(result.address_components);
        if (anyItemHasValue(details)) {
          array.push({
            lon: result.geometry.location.lng,
            lat: result.geometry.location.lat,
            address: {
              name: details.name,
              postcode: details.postcode,
              road: details.road,
              city: details.city,
              state: details.state,
              country: details.country
            },
            original: {
              formatted: result.formatted_address,
              details: result.address_components
            }
          });
        }
      });

      return array;
    } else {
      return undefined;
    }

  }
}
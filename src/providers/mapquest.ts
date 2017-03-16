/**
 * @class MapQuest
 */
export class MapQuest {

  getParameters(options) {
    return {
      url: 'https://open.mapquestapi.com/nominatim/v1/search.php',
      params: {
        q: options.query,
        key: options.key,
        format: 'json',
        addressdetails: 1,
        limit: options.limit || 10,
        countrycodes: options.countrycodes || '',
        'accept-language': options.lang || 'en-US'
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
          postcode: result.address.postcode,
          city: result.address.city || result.address.town,
          state: result.address.state,
          country: result.address.country
        },
        original: {
          formatted: result.display_name,
          details: result.address
        }
      }));
    } else {
      return undefined;
    }
  }
}

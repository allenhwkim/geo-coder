/**
 * @class Pelias
 */
export class Pelias {

  getParameters(options) {
    return {
      url: 'https://search.mapzen.com/v1/search',
      params: {
        text: options.query,
        key: options.key,
        size: options.limit || 10
      }
    };
  }

  handleResponse(results) {
    if (results.features && results.features.length) {
      return results.map(result => ({
        lon: result.geometry.coordinates[0],
        lat: result.geometry.coordinates[1],
        address: {
          name: result.properties.name,
          house_number: result.properties.housenumber,
          postcode: result.properties.postalcode,
          road: result.properties.street,
          city: result.properties.city,
          state: result.properties.region,
          country: result.properties.country
        },
        original: {
          formatted: result.properties.label,
          details: result.properties
        }
      }));
    } else {
      return undefined;
    }
  }
}

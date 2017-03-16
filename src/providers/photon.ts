/**
 * @class Photon
 */
export class Photon {

  getParameters(options) {
    options.lang = options.lang.toLowerCase();

    return {
      url: 'https://photon.komoot.de/api/',
      params: {
        q: options.query,
        limit: options.limit || 10,
        lang: options.lang || 'en'
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
          postcode: result.properties.postcode,
          city: result.properties.city,
          state: result.properties.state,
          country: result.properties.country
        },
        original: {
          formatted: result.properties.name,
          details: result.properties
        }
      }));
    } else {
      return undefined;
    }
  }
}

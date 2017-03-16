/**
 * @class Bing
 */
export class Bing {

  getParameters(options) {
    return {
      url: 'https://dev.virtualearth.net/REST/v1/Locations',
      callbackName: 'jsonp',
      params: {
        query: options.query,
        key: options.key,
        includeNeighborhood: options.includeNeighborhood || 0,
        maxResults: options.maxResults || 10
      }
    };
  }

  handleResponse(results) {
    if (results.resourceSets && results.resourceSets[0] && results.resourceSets[0].length) {
      results = results.resourceSets[0];
      return results.map(result => ({
        lon: result.point.coordinates[1],
        lat: result.point.coordinates[0],
        address: {
          name: result.name
        },
        original: {
          formatted: result.address.formattedAddress,
          details: result.address
        }
      }));
    } else {
      return undefined;
    }
  }
}

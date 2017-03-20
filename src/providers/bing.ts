/**
 * @class Bing
 */
export class Bing {
  options: any; 

  constructor(options) {
    this.options = options || {};
  }

  getParameters(address) {
    return {
      url: 'https://dev.virtualearth.net/REST/v1/Locations',
      callbackName: 'jsonp',
      params: {
        query: address,
        key: this.options.key,
        includeNeighborhood: this.options.includeNeighborhood || 0,
        maxResults: this.options.maxResults || 10
      }
    };
  }

  getReverseGeolookupParameters(lat, lon) {
   //http://dev.virtualearth.net/REST/v1/Locations/point?includeEntityTypes=entityTypes&includeNeighborhood=includeNeighborhood&include=includeValue&key=BingMapsKey
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
        formatted: result.address.formattedAddress,
        raw: result
      }));
    } else {
      return undefined;
    }
  }
}

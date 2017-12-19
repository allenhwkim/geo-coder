import { Bing } from './providers/bing.js';
import { Google } from './providers/google.js';
import { OpenStreet } from './providers/open-street.js';

export class GeoCode {

  constructor(options?: any) {
    this.options = options || {
      providers: ['osm', 'bing', 'google'],
      osm: {},
      bing: {key: 'API-KEY'},
      google: {key: 'API-KEY'}
    };
    this.klasses = {osm: OpenStreet, bing: Bing, google; Google};
  }

  geocode(address) {
    let providers = this.options.providers.slice(); //clone array
    for (let i = 0; i< providers.length; i++) {
      try {
        let provider = providers[i];
        let instance = new this.klasses[provider](this.options[provider]);
        return instance.geolookup(address);
      } catch (e) {
        console.error(e);
      }
    }
  }

  reverse(lat, lng) {
    let providers = this.options.providers.slice(); //clone array
    for (let i = 0; i< providers.length; i++) {
      try {
        let provider = providers[i];
        let instance = new this.klasses[provider](this.options[provider]);
        return instance.reverse(lat, lng);
      } catch (e) {
        console.error(e);
      }
    }
  }

}

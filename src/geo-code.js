import { Bing } from './providers/bing.js';
import { Google } from './providers/google.js';
import { OpenStreet } from './providers/open-street.js';

export class GeoCode {

  constructor(provider = 'osm', options = {}) {
    this.provider = provider;
    this.options = options;
    this.klasses = {osm: OpenStreet, bing: Bing, google: Google};
  }

  geolookup(address) {
    let klass = this.klasses[this.provider];
    let instance = new klass(this.options);
    return instance.geolookup(address);
  }

  reverse(lat, lng) {
    let klass = this.klasses[this.provider];
    let instance = new klass(this.options);
    return instance.reverse(lat, lng);
  }

}
window && (window.GeoCode = GeoCode);

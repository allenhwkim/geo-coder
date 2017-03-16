import { provider } from './providers/index';
import * as qwest from 'qwest'

export class GeoCoder {
  options: any;  //provider-specific options
  provider: any; //provider-specifc functions

  constructor(options?: any) {
    this.options = options || {};
    switch(this.options.provider.toLowerCase()) {
      case 'photon':   this.provider =  new provider.Photon(); break;
      case 'osm':      this.provider =  new provider.OpenStreet(); break;
      case 'mapquest': this.provider =  new provider.MapQuest(); break;
      case 'pelias':   this.provider =  new provider.Pelias(); break;
      case 'bing':     this.provider =  new provider.Bing(); break;
      case 'google':   this.provider =  new provider.Google(); break;
      default: this.provider =  new provider.OpenStreet(); break;
    }
  }

  geocode(address) {
    const provider = this.provider.getParameter({
      query: address,
      provider: this.options.provider,
      key: this.options.key,
      lang: this.options.lang,
      countrycodes: this.options.countrycodes,
      limit: this.options.limit
    });

    return qwest.get(provider.url, provider.params)
      .then(function(xhr, response) {
        console.log('response', response);
        return this.provider.handleResponse(response);
      })
      .catch(function(e, xhr, response) {
        throw e;
      });
  }

}

import { provider } from './providers/index';
import * as qwest from 'qwest'

export class GeoCoder {
  options: any;  //provider-specific options
  provider: any; //provider-specifc functions

  constructor(options?: any) {
    this.options = options || {};
    this.options.provider = this.options.provider || 'osm';
    switch(this.options.provider.toLowerCase()) {
      case 'photon':   this.provider =  new provider.Photon(); break;
      case 'osm':      this.provider =  new provider.OpenStreet(); break;
      case 'mapquest': this.provider =  new provider.MapQuest(); break;
      case 'pelias':   this.provider =  new provider.Pelias(); break;
      case 'bing':     this.provider =  new provider.Bing(); break;
      case 'google':   this.provider =  new provider.Google(); break;
    }
  }

  geocode(address) {
    const provider = this.provider.getParameters({
      query: address,
      provider: this.options.provider,
      key: this.options.key,
      lang: this.options.lang,
      countrycodes: this.options.countrycodes,
      limit: this.options.limit
    });

    return new Promise( (resolve, reject)  => {
      qwest.get(provider.url, provider.params)
        .then((xhr, response) => {
          resolve(this.provider.handleResponse(response));
        })
        .catch((e, xhr, response) => {
          reject(e);
        });
    })
  }

}

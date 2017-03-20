import { provider } from './providers/index';
import * as qwest from 'qwest'
import './autocomplete.css';

export class GeoCoder {
  options: any;  //provider-specific options
  provider: any; //provider-specifc functions

  constructor(options?: any) {
    this.options = options || {};
    this.options.provider = this.options.provider || 'osm';
    switch(this.options.provider.toLowerCase()) {
      case 'osm':      this.provider =  new provider.OpenStreet(options); break;
      case 'bing':     this.provider =  new provider.Bing(options); break;
      case 'google':   this.provider =  new provider.Google(options); break;
    }
  }

  geocode(address) {
    let params = this.provider.getParameters(address);
    return new Promise( (resolve, reject)  => {
      qwest.get(params.url, params.params)
        .then((xhr, response) => {
          resolve(this.provider.handleResponse(response));
        })
        .catch((e, xhr, response) => {
          reject(e);
        });
    })
  }

  autocomplete(inputEl) {
    let listEl = document.createElement('ul');
    listEl.className = 'geocode-autocomplete';
    inputEl.parentNode.insertBefore(listEl, inputEl.nextSibling);
    inputEl.addEventListener('keyup', event => {
      listEl.style.display = '';
      while (listEl.firstChild) {
        listEl.removeChild(listEl.firstChild);
      }
      this.geocode(event.target.value).then( (result: any) =>  {
        result.forEach( el => {
          let liEl = document.createElement('li');
          liEl.addEventListener('click', event => {
            let customEvent = new CustomEvent('place_changed', {
              detail: el,
              bubbles: true,
              cancelable: true
            })
            inputEl.value = el.formatted;
            listEl.style.display = 'none';
            inputEl.dispatchEvent(customEvent);
          });
          liEl.innerHTML = el.formatted;
          listEl.appendChild(liEl);
        })
      });
    })
  }

  reverse(lat, lng) {
    return new Promise((resolve, reject) => {
    });
  }

}

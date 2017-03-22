import {GeoCoder} from 'geocoder';

var changeEvent = new Event('change');

export default class Main {
  providerName: string = 'osm';
  providerApiKeys: any = {
    'google': 'AIzaSyCXSoZnw0psVN4GShGR4NRcWDIFjTK_iOk',
    'bing':   'AjOGMGb_zZWTtds4MsziENAMwak-L3JM78vIfyI9oDDYtw7tk5-kHHJyLfy8CUjo'
  } ;
  geoCoder: GeoCoder;

  constructor() {
    let selectEl = document.querySelector('#provider');
    this.setProvider(selectEl['value']);
    selectEl.addEventListener('change', e => this.setProvider(e.target['value']) );
  }

  setProvider(providerName: string = 'osm') {
    let geoCoderOptions = {provider: providerName};
    if (this.providerApiKeys[providerName]) {
      geoCoderOptions['key'] = this.providerApiKeys[providerName];
    }
    console.log('geoCoderOptions', geoCoderOptions);
    this.geoCoder = new GeoCoder(geoCoderOptions);
    //this.geoCoder = new GeoCoder();
    console.log('set..................provider')
    this.geocode();
    this.autocomplete();
    this.reverseLookup();
  }

  geocode() {
    let inputEl = document.querySelector('#geocode .address');
    let resultEl: HTMLTextAreaElement = <any>document.querySelector('#geocode .result');
    inputEl.addEventListener('change', event => {
      let address = (<HTMLInputElement>event.target).value;
      this.geoCoder.geocode(address).then(result => {
        resultEl.value = JSON.stringify(result, null, '  ');
      })
    })
    inputEl.dispatchEvent(changeEvent);
  }

  autocomplete() {
    let inputEl = document.querySelector('#autocomplete .address');
    this.geoCoder.autocomplete(inputEl);
    let resultEl: HTMLTextAreaElement = <any>document.querySelector('#autocomplete .result');
    inputEl.addEventListener('place_changed', (event: any) => {
      resultEl.value = JSON.stringify(event.detail, null, '  ');
    })
  }

  reverseLookup() {
    let latEl = document.querySelector('#reverse .lat');
    let lonEl = document.querySelector('#reverse .lon');
    let resultEl: HTMLTextAreaElement = 
      <any>document.querySelector('#reverse .result');

    let reverseHandler = event => {
      let lat = parseFloat((<HTMLInputElement>latEl).value || '0');
      let lon = parseFloat((<HTMLInputElement>lonEl).value || '0');
      this.geoCoder.reverse(lat, lon).then(result => {
        resultEl.value = JSON.stringify(result, null, '  ');
      })
    }
    latEl.addEventListener('change', reverseHandler);
    lonEl.addEventListener('change', reverseHandler);
    latEl.dispatchEvent(changeEvent);
  }
}

let start = new Main();
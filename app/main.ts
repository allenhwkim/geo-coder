import {GeoCoder} from 'geocoder';

export default class Main {
  geoCoder: GeoCoder;
  constructor() {
    this.geoCoder = new GeoCoder();
    this.geocode();
    this.autocomplete();
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
  }
}

let start = new Main();
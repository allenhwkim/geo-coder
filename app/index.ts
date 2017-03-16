import {GeoCoder} from 'geocoder';

export default class Main {
  geoCoder: GeoCoder;
  constructor() {
    this.geoCoder = new GeoCoder();

    document.querySelector('#address').addEventListener('change', event => {
      let address = (<HTMLInputElement>event.target).value;
      this.geoCoder.geocode(address).then(result => {
        console.log('result....................', result);
      })
    })
  }
}

let start = new Main();
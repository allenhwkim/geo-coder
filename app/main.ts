import {GeoCoder} from 'geocoder';

export default class Main {
  constructor() {
    let geoCoder = new GeoCoder();
    geoCoder.geocode('8200 dixie road').then((result: any[]) => {
      result.map(addr => console.log(addr.original.formatted));
    })

  }
}

let start = new Main();

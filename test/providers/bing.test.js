import {Bing} from '../../src/providers/bing.js'

//Allen's private key
var key='AjOGMGb_zZWTtds4MsziENAMwak-L3JM78vIfyI9oDDYtw7tk5-kHHJyLfy8CUjo';

it('#geocode', done => {
  let bing = new Bing({key});
  expect.assertions(4)
  return bing.geolookup('brampton on').then(result => {
    expect(result.length).toBe(1);
    expect(result[0].source).toBe('Bing');
    expect(result[0].lat).toBe(43.6843109130859);
    expect(result[0].lng).toBe(-79.7587203979492);
    done();
  })
});

it('#reverse', done => {
  let bing = new Bing({key});
  return bing.reverse(43.6843109130859, -79.7587203979492).then(result => {
    expect(result.source).toBe('Bing');
    expect(result.address).toMatch(/Brampton/);
    done();
  })
});

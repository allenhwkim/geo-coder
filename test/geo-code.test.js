import {GeoCode} from '../src/geo-code.js'

it('#geolookup / osm', done => {
  let geoCode = new GeoCode();
  return geoCode.geolookup('brampton on').then(result => {
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].source).toBe('OpenStreetMap');
    done();
  })
});

it('#reverse / osm', done => {
  let geoCode = new GeoCode();
  return geoCode.reverse(43.6843109130859, -79.7587203979492).then(result => {
    expect(result.source).toBe('OpenStreetMap');
    expect(result.address).toMatch(/Brampton/);
    done();
  })
});

it('#geolookup / google', done => {
  let key = 'AIzaSyDRgyfEykN-jKKKINhKDsuVmHJFls41Lv8';
  let geoCode = new GeoCode('google', {key});
  return geoCode.geolookup('brampton on').then(result => {
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].source).toBe('Google');
    done();
  })
});

it('#reverse / google', done => {
  let key = 'AIzaSyDRgyfEykN-jKKKINhKDsuVmHJFls41Lv8';
  let geoCode = new GeoCode('google', {key});
  return geoCode.reverse(43.6843109130859, -79.7587203979492).then(result => {
    expect(result.source).toBe('Google');
    expect(result.address).toMatch(/Brampton/);
    done();
  })
});

it('#reverse / bing', done => {
  let key='AjOGMGb_zZWTtds4MsziENAMwak-L3JM78vIfyI9oDDYtw7tk5-kHHJyLfy8CUjo';
  let geoCode = new GeoCode('bing', {key});
  return geoCode.reverse(43.6843109130859, -79.7587203979492).then(result => {
    expect(result.source).toBe('Bing');
    expect(result.address).toMatch(/Brampton/);
    done();
  })
});

it('#geolookup / ging', done => {
  let key='AjOGMGb_zZWTtds4MsziENAMwak-L3JM78vIfyI9oDDYtw7tk5-kHHJyLfy8CUjo';
  let geoCode = new GeoCode('bing', {key});
  return geoCode.geolookup('brampton on').then(result => {
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].source).toBe('Bing');
    done();
  })
});

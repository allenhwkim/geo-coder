import {Google} from '../../src/providers/google.js'

// Allen's private key
var key='AIzaSyDRgyfEykN-jKKKINhKDsuVmHJFls41Lv8';

it('#geolookup', done => {
  let google = new Google({key});
  return google.geolookup('brampton on').then(result => {
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].source).toBe('Google');
    expect(result[0].lat).toBe(43.7315479);
    expect(result[0].lng).toBe(-79.7624177);
    done();
  })
});

it('#reverse', done => {
  let google = new Google({key});
  return google.reverse(43.7315479, -79.7624177).then(result => {
    expect(result.source).toBe('Google');
    expect(result.address).toMatch(/Brampton/);
    done();
  })
});
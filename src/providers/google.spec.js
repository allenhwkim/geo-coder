import test from 'ava';
import browserEnv from 'browser-env';
import {Google} from './google.js'

browserEnv();
var key='AIzaSyDRgyfEykN-jKKKINhKDsuVmHJFls41Lv8';

test('geolookup', t => {
  let google = new Google({key});
  return google.geolookup('brampton on').then(result => {
    t.truthy(result.length > 0);
    t.is(result[0].source, 'Google');
    t.is(result[0].lat, 43.7315479);
    t.is(result[0].lng, -79.7624177);
  })
});

test('reverse', t => {
  let google = new Google({key});
  return google.reverse(43.7315479, -79.7624177).then(result => {
    t.is(result.source, 'Google');
    t.regex(result.address, /Brampton, ON/);
  })
});
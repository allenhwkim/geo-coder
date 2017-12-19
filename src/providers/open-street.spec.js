import test from 'ava';
import browserEnv from 'browser-env';
import {OpenStreet} from './open-street.js'

browserEnv();

test('geolookup', t => {
  let osm = new OpenStreet();
  return osm.geolookup('brampton on').then(result => {
    t.truthy(result.length > 0);
    t.is(result[0].source, 'OpenStreetMap');
    t.is(result[0].lat, 43.715783);
    t.is(result[0].lng, -79.752502);
  })
});

test('reverse', t => {
  let osm = new OpenStreet();
  return osm.reverse(43.7315479, -79.7624177).then(result => {
    t.is(result.source, 'OpenStreetMap');
    t.regex(result.address, /Brampton/);
  })
});
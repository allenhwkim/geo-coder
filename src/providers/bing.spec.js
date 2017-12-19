import test from 'ava';
import browserEnv from 'browser-env';
import {Bing} from './bing.js'

browserEnv();
var key='AjOGMGb_zZWTtds4MsziENAMwak-L3JM78vIfyI9oDDYtw7tk5-kHHJyLfy8CUjo';

test('geolookup', t => {
  let bing = new Bing({key});
  return bing.geolookup('brampton on').then(result => {
    t.truthy(result.length > 0);
    t.is(result[0].source, 'Bing');
    t.is(result[0].lat, 43.6843109130859);
    t.is(result[0].lng, -79.7587203979492);
  })
});

test('reverse', t => {
  let bing = new Bing({key});
  return bing.reverse(43.6843109130859, -79.7587203979492).then(result => {
    t.is(result.source, 'Bing');
    t.is(result.address, '8 Wellington St W, Brampton, ON L6Y, Canada');
  })
});
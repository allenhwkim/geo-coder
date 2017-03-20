import {Bing} from './bing';
import {Google} from './google';
import {OpenStreet} from './open-street';

let serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

let provider = {
  Bing: Bing,
  Google: Google,
  OpenStreet: OpenStreet
}

export {
  provider,
  serialize
};

import {Bing} from './bing';
import {Google} from './google';
import {OpenStreet} from './open-street';

let provider = {
  Bing: Bing,
  Google: Google,
  OpenStreet: OpenStreet
}

export {
  provider
};

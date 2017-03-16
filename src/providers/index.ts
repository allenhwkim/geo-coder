import {Bing} from './bing';
import {Google} from './google';
import {MapQuest} from './mapquest';
import {OpenStreet} from './open-street';
import {Pelias} from './pelias';
import {Photon} from './photon';

let provider = {
  Bing: Bing,
  Google: Google,
  MapQuest: MapQuest,
  OpenStreet: OpenStreet,
  Pelias: Pelias,
  Photon: Photon
}

export {
  provider
};

import {serialize} from './index';

function jsonp(url, callbackName='jsonp') {
  return new Promise((resolve, reject) => {
    let rand = Math.round(Math.random()*1000000000);
    let callbackFunctionName = 'func' + rand;
    let script = document.createElement('script');
    script.src = `${url}&${callbackName}=${callbackFunctionName}`;

    window[callbackFunctionName] = function(data){
      document.head.removeChild(script);
      setTimeout( () => delete window[callbackFunctionName] );
      resolve(data);
    };
 
    script.onerror = error => {
      document.head.removeChild(script);
      reject(error);
    }

    document.head.appendChild(script);
  });
}

/**
 * @class Bing
 */
export class Bing {
  options: any; 

  constructor(options) {
    this.options = options || {};
  }

  geolookup(address) {
    let url: string = 'https://dev.virtualearth.net/REST/v1/Locations';
    let params: any = {
      query: address,
      key: this.options.key,
      includeNeighborhood: this.options.includeNeighborhood || 0,
      maxResults: this.options.maxResults || 10
    };
    url = `${url}?${serialize(params)}`

    return jsonp(url).then(json => {
      try {
        console.log('json', json);
        let results = json['resourceSets'][0]['resources'];
        return results.map(result => {
          return {
            source: 'Bing',
            lon: parseFloat(result.point.coordinates[1]),
            lat: parseFloat(result.point.coordinates[0]),
            address: {
              name: result.name
            },
            formatted: result.address.formattedAddress,
            raw: result
          };
        });
      } catch(e) {
        return undefined; 
      }
    });
  }

  reverse(lat, lon) {
    let url: string = 
      `http://dev.virtualearth.net/REST/v1/Locations/${lat},${lon}`;
    let params: any = {
      includeNeighborhood: this.options.includeNeighborhood || 0,
      key: this.options.key
    };
    url = `${url}?${serialize(params)}`

    return jsonp(url).then(json => {
      try {
        let address = json['resourceSets'][0]['resources'][0]['name'];
        return {
          source: 'Bing',
          address: address,
          raw: json
        };
      } catch(e) {
        return undefined;
      }
    });
  }

}

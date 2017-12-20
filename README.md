Geocoder
---------
address lookup/autocomplete/reverse-geolookup for Google, OpenStreet, and Bing

## NodeJS Usage

### Install
    npm install geo-code --save-dev

### Example
    var fetch = require('node-fetch');  // to use fetch
    var GeoCode = require('./dist/geoCode.umd.js').GeoCode;
    var geocode = new GeoCode(); // in default 'osm' provider is used

    // geolookup example
    geocode.geolookup('Brampton, Canada').then(result => {
      console.log(result))  //  [ { source: 'OpenStreetMap', lng: -79.752502, lat: 43.715783,..}]
    });
    
    // reverse lookup example
    geocode.reverse(43.653226, -79.3831843).then(result => {
      console.log(result) // {source: 'OpenStreetMap', address: 'Brampton, ON'...}
    });
    
## Browser Usage



## NOTE
an api key is required to use Google or Bing map.

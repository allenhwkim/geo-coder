Geocoder
---------
address lookup/autocomplete/reverse-geolookup for Google, OpenStreet, and Bing

* Small size(2.3K min/gzipped)
* Working on NodeJS and Browser

## NodeJS Usage

### Install
    npm install geo-coder --save-dev

### Example
    global.fetch = require('node-fetch');   // set fetch for nodeJS
    var geoCode = new require('geo-coder').GeoCode();

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




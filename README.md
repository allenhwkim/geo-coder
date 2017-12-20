
Geocoder
---------
address lookup/autocomplete/reverse-geolookup for Google, OpenStreet, and Bing

* Small size(2.3K min/gzipped)
* Working on NodeJS and Browser

[Documentation](API.md)
[Example](test/test.html)
## NodeJS Usage

### Install
    npm install geo-coder --save-dev

### Example
    global.fetch = require('node-fetch');   // set fetch for nodeJS
    var GeoCode = require('geo-coder').GeoCode;

    var geoCode = new GeoCode();

    // geolookup example
    geocode.geolookup('Brampton, Canada').then(result => {
      console.log(result))  //  [ { source: 'OpenStreetMap', lng: -79.752502, lat: 43.715783,..}]
    });
    
    // reverse lookup example
    geocode.reverse(43.653226, -79.3831843).then(result => {
      console.log(result) // {source: 'OpenStreetMap', address: 'Brampton, ON'...}
    });
    
## Browser Usage

### Install
Add the library

    <script src="https://unpkg.com/geo-coder"></script>

### Example

    var geoCode = new GeoCode();

    // geolookup example
    geoCode.geolookup('Brampton, Canada').then(result => {
      console.log(result);
    });

    // reverse lookup example
    geoCode.reverse(43.653226, -79.3831843).then(result => {
      console.log(result);
    });

## NOTE
an api key is required to use Google
https://developers.google.com/maps/documentation/javascript/get-api-key

or Bing map.
https://msdn.microsoft.com/en-us/library/ff428642.aspx


var fetch = require('node-fetch');
var GeoCode = require('./dist/geoCode.umd.js').GeoCode;
var geocode = new GeoCode(); // in default 'osm' provider is used
geocode.geolookup('Brampton, Canada').then(result => console.log(result))
   [ { source: 'OpenStreetMap', lng: -79.752502, lat: 43.715783,..]
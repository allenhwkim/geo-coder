global.fetch = require('node-fetch');
var geoCode = new require('./dist/geoCode.umd.min.js').GeoCode();
var geocode = new GeoCode(); // in default 'osm' provider is used
geocode.geolookup('Brampton, Canada').then(result => console.log(result));
geocode.reverse(43.715783, -79.752502).then(result => console.log(result));

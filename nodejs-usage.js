global.fetch = require('node-fetch');
var geoCode = new require('./dist/geoCode.umd.min.js').GeoCode();
geocode.geolookup('Brampton, Canada').then(result => console.log(result));
geocode.reverse(43.715783, -79.752502).then(result => console.log(result));


Geocoder
---------
address lookup/autocomplete/reverse-geolookup for Google, OpenStreet, and Bing

[![image](https://cloud.githubusercontent.com/assets/1437734/24178224/32744238-0e7e-11e7-9806-ce0ffddd9218.png)](https://rawgit.com/allenhwkim/geocoder/master/app/index.html)

Installation
=============

    npm install geo-coder

Getting Started
===============
First instantiate GeoCoder object with provider information

Example
```
  var geoCoder = new GeoCoder({
    provider: 'google',  // 'osm', or 'bing'
    key: MY_GOOGLE_API_KEY
  });
```

Geocoding Example
=================
```
  geoCoder.geocode('Brampton, Ontario').then(result => {
    console.log('geo lookup result', result);
  })
```

Autocomplete Example
====================
```
  let inputEl = document.querySelector('#autocomplete .address');
  geoCoder.autocomplete(inputEl);
  inputEl.addEventListener('place_changed', (event: any) => {
    console.log('autocomplete result', evnt);
  })
```
Reverse Lookup Example
======================
```
  geoCoder.reverse(43.653226, -79.3831843).then(result => {
    console.log('reverse lookup result', result);
  })
```

Providers
==========
* Google (api key required)
* Bing (api key required)
* OpenStreet



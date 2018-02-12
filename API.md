## Classes

<dl>
<dt><a href="#GeoCode">GeoCode</a></dt>
<dd></dd>
<dt><a href="#Bing">Bing</a></dt>
<dd></dd>
<dt><a href="#Google">Google</a></dt>
<dd></dd>
<dt><a href="#OpenStreet">OpenStreet</a></dt>
<dd></dd>
<dt><a href="#OpenCage">OpenCage</a></dt>
<dd></dd>
</dl>

<a name="GeoCode"></a>

## GeoCode
**Kind**: global class  

* [GeoCode](#GeoCode)
    * [new GeoCode(options)](#new_GeoCode_new)
    * [.geolookup()](#GeoCode+geolookup) ⇒ <code>Promise</code>
    * [.reverse(lat,, lng,)](#GeoCode+reverse) ⇒ <code>Promise</code>

<a name="new_GeoCode_new"></a>

### new GeoCode(options)

| Param | Type | Description |
| --- | --- | --- |
| provider. | <code>string</code> | default 'osm'. 'osm', 'google', 'bing', 'opencage' |
| options | <code>object</code> | for each provider. api key as in 'key' is required for 'google', 'bing' and 'opencage' |

<a name="GeoCode+geolookup"></a>

### geoCode.geolookup() ⇒ <code>Promise</code>
**Kind**: instance method of [<code>GeoCode</code>](#GeoCode)  
**Returns**: <code>Promise</code> - with an array format when successful  

| Param | Type | Description |
| --- | --- | --- |
| address. | <code>string</code> | e.g. 'brampton, on' |

<a name="GeoCode+reverse"></a>

### geoCode.reverse(lat,, lng,) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>GeoCode</code>](#GeoCode)  
**Returns**: <code>Promise</code> - with an object format when successful  

| Param | Type | Description |
| --- | --- | --- |
| lat, | <code>number</code> | latitude |
| lng, | <code>number</code> | latitude |

<a name="Bing"></a>

## Bing
**Kind**: global class  

* [Bing](#Bing)
    * [new Bing(options)](#new_Bing_new)
    * [.geolookup()](#Bing+geolookup) ⇒ <code>Promise</code>
    * [.reverse(lat,, lng,)](#Bing+reverse) ⇒ <code>Promise</code>

<a name="new_Bing_new"></a>

### new Bing(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | options for Bing geo lookup. e.g. `{key: XXXXX, includeNeighbourhood: 1, maxResult: 50}` |

<a name="Bing+geolookup"></a>

### bing.geolookup() ⇒ <code>Promise</code>
**Kind**: instance method of [<code>Bing</code>](#Bing)  
**Returns**: <code>Promise</code> - with an array format when successful  

| Param | Type | Description |
| --- | --- | --- |
| address. | <code>string</code> | e.g. 'brampton, on' |

<a name="Bing+reverse"></a>

### bing.reverse(lat,, lng,) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>Bing</code>](#Bing)  
**Returns**: <code>Promise</code> - with an object format when successful  

| Param | Type | Description |
| --- | --- | --- |
| lat, | <code>number</code> | latitude |
| lng, | <code>number</code> | longitude |

<a name="Google"></a>

## Google
**Kind**: global class  

* [Google](#Google)
    * [new Google(options)](#new_Google_new)
    * [.geolookup()](#Google+geolookup) ⇒ <code>Promise</code>
    * [.reverse(lat,, lng,)](#Google+reverse) ⇒ <code>Promise</code>

<a name="new_Google_new"></a>

### new Google(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | options for Google geo lookup. e.g. `{key: XXXXX, language: 'en-US'}` |

<a name="Google+geolookup"></a>

### google.geolookup() ⇒ <code>Promise</code>
**Kind**: instance method of [<code>Google</code>](#Google)  
**Returns**: <code>Promise</code> - with an array format when successful  

| Param | Type | Description |
| --- | --- | --- |
| address. | <code>string</code> | e.g. 'brampton, on' |

<a name="Google+reverse"></a>

### google.reverse(lat,, lng,) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>Google</code>](#Google)  
**Returns**: <code>Promise</code> - with an object format when successful  

| Param | Type | Description |
| --- | --- | --- |
| lat, | <code>number</code> | latitude |
| lng, | <code>number</code> | longitude |

<a name="OpenStreet"></a>

## OpenStreet
**Kind**: global class  

* [OpenStreet](#OpenStreet)
    * [new OpenStreet(options)](#new_OpenStreet_new)
    * [.geolookup()](#OpenStreet+geolookup) ⇒ <code>Promise</code>
    * [.reverse(lat,, lng,)](#OpenStreet+reverse) ⇒ <code>Promise</code>

<a name="new_OpenStreet_new"></a>

### new OpenStreet(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | options for OpenStreet geo lookup.   `e.g. {key: XXXXX, limit: 15, zoom: 18, addressdetail: 1, lang: 'en-US'}` |

<a name="OpenStreet+geolookup"></a>

### openStreet.geolookup() ⇒ <code>Promise</code>
**Kind**: instance method of [<code>OpenStreet</code>](#OpenStreet)  
**Returns**: <code>Promise</code> - with an array format when successful  

| Param | Type | Description |
| --- | --- | --- |
| address. | <code>string</code> | e.g. 'brampton, on' |

<a name="OpenStreet+reverse"></a>

### openStreet.reverse(lat,, lng,) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>OpenStreet</code>](#OpenStreet)  
**Returns**: <code>Promise</code> - with an object format when successful  

| Param | Type | Description |
| --- | --- | --- |
| lat, | <code>number</code> | latitude |
| lng, | <code>number</code> | latitude |

<a name="OpenCage"></a>

## OpenCage
**Kind**: global class

* [OpenCage](#OpenCage)
    * [new OpenCage(options)](#new_OpenCage_new)
    * [.geolookup()](#OpenCage+geolookup) ⇒ <code>Promise</code>
    * [.reverse(lat,, lng,)](#OpenCage+reverse) ⇒ <code>Promise</code>

<a name="new_OpenCage_new"></a>

### new OpenCage(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | options for OpenCage geo lookup. `e.g. {key: XXXXX, lang: 'en-US'}` |

<a name="OpenCage+geolookup"></a>

### openStreet.geolookup() ⇒ <code>Promise</code>
**Kind**: instance method of [<code>OpenCage</code>](#OpenCage)
**Returns**: <code>Promise</code> - with an array format when successful

| Param | Type | Description |
| --- | --- | --- |
| address. | <code>string</code> | e.g. 'brampton, on' |

<a name="OpenCage+reverse"></a>

### openStreet.reverse(lat, lng) ⇒ <code>Promise</code>
**Kind**: instance method of [<code>OpenCage</code>](#OpenCage)
**Returns**: <code>Promise</code> - with an object format when successful

| Param | Type | Description |
| --- | --- | --- |
| lat, | <code>number</code> | latitude |
| lng, | <code>number</code> | latitude |


# metaweather

> Promise based npm module for using [metaweather API](https://www.metaweather.com/api/)

---

## Install

```
$ npm install --save metaweather
```

## Usage

```js
var MetaWeather = require('metaweather');

var mw = new MetaWeather;

// Use string query to location info and woeid
mw.search().query('san fran').then(function(response) {
    console.log(response.body);
});

// Search locations nearby with Lat/Lon
// …as string:
mw.search().latLon('37.777119, -122.41964').then(function(response) {
    console.log(response.body);
});

// …or object:
mw.search().latLon({lat: 37.777119, lon: -122.41964}).then(function(response) {
    console.log(response.body);
});

// Get current location weather data with woeid
mw.location(2487956).then(function(response) {
    console.log(response.body);
});

// Get location weather from a specific date
// …as string:
mw.location(2487956, '2017-04-05').then(function(response) {
    console.log(response.body);
});

// …or object:
mw.location({woeid: 2487956, date: '2017/04/05'}).then(function(response) {
    console.log(response.body);
});
```

## API Methods

#### .search().query(queryString)
#### .search().latLon(queryString)
#### .search().latLon({lat, lon})

#### .location(woeid) // 2487956
#### .location(woeid, dateString) // 2017/04/12 or 2017-04-12
#### .location({woeid, dateString}) {woeid: 2487956, date: '2017/04/12'}

## About Metaweather

> MetaWeather is an automated weather data aggregator that takes the weather predictions from various forecasters and calculates the most likely outcome. The thinking is that the combined knowledge of the forecasters will produce a better prediction. [Read more about MetaWeather](https://www.metaweather.com/de/about/)
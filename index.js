var got = require('got');

var metaweather = module.exports = function() {
	this.apiUrl = 'https://www.metaweather.com/api/';
	this.p = function(url) {
		return got(this.apiUrl + url, {json: true});
	};
};

metaweather.prototype.search = require('./src/search');
metaweather.prototype.location = require('./src/location');

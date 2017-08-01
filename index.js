var metaweather = module.exports = function() {
	this.url = 'https://www.metaweather.com/api/'
}
metaweather.prototype.search = require('./src/search');
metaweather.prototype.location = require('./src/location');
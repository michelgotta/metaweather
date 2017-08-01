var got = require('got');

module.exports = function(location, date) {
	var metaweather = this;

	if (typeof date === 'undefined' && typeof location === 'number') {
		return got(metaweather.url + 'location/' + location);
	}

	if (typeof location === 'object') {
		date = location.date;
		location = location.woeid;
	}

	if (typeof location === 'number' && typeof date === 'string') {
		return got(metaweather.url + 'location/' + location + '/' + date.replace(/\-/g, '\/'));
	}
}

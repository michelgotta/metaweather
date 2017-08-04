module.exports = function(location, date) {
	var metaweather = this;

	if (typeof date === 'undefined' && typeof location === 'number') {
		return metaweather.p('location/' + location);
	}

	if (typeof location === 'object') {
		date = location.date;
		location = location.woeid;
	}

	if (typeof location === 'number' && typeof date === 'string') {
		return metaweather.p('location/' + location + '/' + date.replace(/\-/g, '\/'));
	}
};

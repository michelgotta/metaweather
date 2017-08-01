var got = require('got');

module.exports = function() {
	var metaweather = this;
	return {
		query: function(queryString) {
			return got(metaweather.url + 'location/search/?query=' + queryString, {json: true});
		},
		latLon: function(latLon) {
			if (typeof latLon === 'object') {
				latLon = latLon.lat + ',' + latLon.lon;
			}

			return got(metaweather.url + 'location/search/?lattlong=' + latLon, {json: true});
		}
	}
}
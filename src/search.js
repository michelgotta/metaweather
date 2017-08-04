module.exports = function() {
	var metaweather = this;

	return {
		query: function(queryString) {
			return metaweather.p('location/search/?query=' + queryString);
		},
		latLon: function(latLon) {
			if (typeof latLon === 'object') {
				latLon = latLon.lat + ',' + latLon.lon;
			}

			return metaweather.p('location/search/?lattlong=' + latLon);
		}
	};
};

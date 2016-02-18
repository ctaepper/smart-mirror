var template = require('./weather.template.jade');

// @gnInject
module.exports = function ($http, $interval, WU_API_KEY) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			city: '@',
			country: '@?'
		},
		link: function (scope, el) {
			scope.country = scope.country || 'DE';

			update();
			$interval(update, 1000 * 60 * 60); // 1 stunde

			function update() {
				$http
					.get('http://api.wunderground.com/api/' + WU_API_KEY + '/geolookup/conditions/forecast/lang:DL/q/' + scope.country + '/' + scope.city + '.json')
					.then(function (response) {
						scope.data = response.data;
					});
			}

		},
		template: template
	};
};
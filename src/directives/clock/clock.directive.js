var template = require('./clock.template.jade');

// @gnInject
module.exports = function ($interval) {
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		link: function (scope, el) {
			scope.timestamp = new Date();
			$interval(function () {
				scope.timestamp = new Date();
			}, 1000);
		},
		template: template
	};
};
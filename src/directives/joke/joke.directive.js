var template = require('./joke.template.jade');

// @gnInject
module.exports = function ($interval) {
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		link: function (scope, el) {
			var i =  $interval(function () {
				el.find('span')[0].innerHTML = document.querySelector('.funny4you').innerHTML;
				if (document.querySelector('.funny4you')) $interval.cancel(i);
			}, 300);
		},
		template: template
	};
};
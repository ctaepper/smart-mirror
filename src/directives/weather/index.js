var angular = require('angular');

var directive = require('./weather.directive.js');

module.exports = angular.module('directives.weather', [])
	.directive('weather', directive)
	.constant('WU_API_KEY', wuApiKey)
	.name;
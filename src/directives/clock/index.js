var angular = require('angular');

var directive = require('./clock.directive.js');

module.exports = angular.module('directives.clock', [])
	.directive('clock', directive)
	.name;
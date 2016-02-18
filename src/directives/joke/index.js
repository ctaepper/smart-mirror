var angular = require('angular');

var directive = require('./joke.directive.js');

module.exports = angular.module('directives.joke', [])
	.directive('joke', directive)
	.name;
var angular = require('angular');
var locale = require('angular-i18n/de');

var css = require('./index.css');
var clock = require('directives/clock');
var joke = require('directives/joke');
var weather = require('directives/weather');

angular.module('smart-mirror', [locale, clock, joke, weather]).name;
require('dotenv').config();
var env = process.env;
var _ = require('lodash');

var config = {
	wuApiKey: env.WU_API_KEY
};

module.exports = config;

module.exports.wp = function () {
	var wpConfig = {};
	_.each(_.keys(config), function (key) {
		wpConfig[key] = typeof config[key] === 'string' ? JSON.stringify(config[key]) : config[key];
	});
	return wpConfig;
};
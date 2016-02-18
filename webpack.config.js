var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config').wp();

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.jade',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		}),
		new webpack.DefinePlugin(config)
	],
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader?modules' },
			{ test: /\.jade$/, loader: 'jade-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	},
	devtool: 'source-map',
	resolve: {
		root: path.resolve('./src')
	}
};
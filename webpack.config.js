var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		loaders: [
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
          		use: 'css-loader',
          	}),
			exclude: '/node_modules/'
		},
		{
      		test: /\.html$/,
      		loader: 'raw-loader'
    	}]
	},
	plugins: [
    	new ExtractTextPlugin('styles.css'),
    	new HtmlWebpackPlugin({
    		template: 'src/index.html',
    		filename: 'index.html'
    	})
  	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}
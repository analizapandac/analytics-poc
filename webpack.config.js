/*
    ./webpack.config.js
*/

const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
        embed: './src/js/embed.js',
        umaiAnalytics: ['babel-polyfill', './src/js/umaiAnalytics.js']
  },
  output: {
        path: path.resolve('dist'),
        filename: "./[name].min.js"
  },

  devServer : {
        inline : true,
        disableHostCheck: true,
        public:'0.0.0.0:8080'
  },

  module: {
    rules: [
      	{ 
      	 	test: /\.(js|jsx)$/,
	      	exclude: /node_modules/,
	      	use: {
	        	loader: 'babel-loader',
	        	options: {
	          	presets: ['babel-preset-env', 'babel-preset-react']
	        }
	      }
      	},
        {
	        test: /\.(scss|css)$/,
	        use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: [
	            { loader: 'css-loader', options: {minimize: true, sourceMap: true} }, 
	            { loader: 'sass-loader', options: {minimize: true, sourceMap: true} }
	          ]
	        })
	    }
    ]
  },

  plugins: [
    new Dotenv({
      path: './.env.local', // Path to .env file (this is the default) 
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe) 
    }),

    new ExtractTextPlugin({
      filename: 'umaiAnalytics.min.css',
      allChunks: true
    }),
    
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          unused: true,
          dead_code: true,
          warnings: false,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true,
          sequences: true,
          booleans: true
        },
        output: {
          comments: false
        }
      }
    }), // to compile the ES2015+ code.
  ]
}
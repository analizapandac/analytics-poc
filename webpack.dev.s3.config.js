/*
    ./webpack.config.js
*/

const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const S3Plugin = require('webpack-s3-plugin');
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
        port : 8080
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
		
	new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new S3Plugin({
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_BUCKET_REGION
      },
      s3UploadOptions: {
        Bucket: process.env.AWS_BUCKET,
        ContentEncoding(fileName) {
          if (/\.gz/.test(fileName))
            return 'gzip'
        },

        ContentType(fileName) {
          if (/\.js/.test(fileName)) 
            return 'application/javascript'
          else if (/\.css/.test(fileName))
            return 'text/css'
          else
            return 'text/plain'
        } 
      },
      	basePath: 'dist',
	    directory: path.resolve('dist')
	}),
      
    new Dotenv({
      path: './.env.devs3', // Path to .env file (this is the default) 
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
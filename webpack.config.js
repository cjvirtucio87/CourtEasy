var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
    ]
  },
  plugins: []
};

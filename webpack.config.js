require('path');
require('webpack');
// require('./node_modules/bootstrap-loader/lib/bootstrap.loader.js');

// Plugins
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

// jQuery and Tether.
const provide = new ProvidePlugin({
  jQuery: 'jquery',
  $: 'jquery',
  jquery: 'jquery',
  'Tether': 'tether',
  'window.Tether': 'tether',
  Tooltip: 'exports?Tooltip!bootstrap/js/dist/tooltip',
  Alert: 'exports?Alert!bootstrap/js/dist/alert',
  Button: 'exports?Button!bootstrap/js/dist/button',
  Carousel: 'exports?Carousel!bootstrap/js/dist/carousel',
  Collapse: 'exports?Collapse!bootstrap/js/dist/collapse',
  Dropdown: 'exports?Dropdown!bootstrap/js/dist/dropdown',
  Modal: 'exports?Modal!bootstrap/js/dist/modal',
  Popover: 'exports?Popover!bootstrap/js/dist/popover',
  Scrollspy: 'exports?Scrollspy!bootstrap/js/dist/scrollspy',
  Tab: 'exports?Tab!bootstrap/js/dist/tab',
  Util: 'exports?Util!bootstrap/js/dist/util'
});

module.exports = {
  entry: ['bootstrap-loader', './src/app.js'],
  output: {
    path: __dirname + "/build",
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
       { test: /\.scss$/, exclude: [/node_modules/], loaders: ['style', 'css', 'sass'] },
       { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
       { test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192' },
       { test: /\.css$/, loaders: [ 'style-loader', 'css-loader?importLoaders=1', 'postcss-loader'] },
       { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
    ]
  },
  plugins: [provide]
};

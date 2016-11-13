require('path');
require('webpack');

// Plugins
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

// jQuery and Tether.
const provide = new ProvidePlugin({
  jQuery: 'jquery',
  $: 'jquery',
  jquery: 'jquery',
  'Tether': 'tether',
  'window.Tether': 'tether'
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader' },
       { test: /\.scss$/, exclude: [/node_modules/], loaders: ['style', 'css', 'sass'] },
       { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
       { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  plugins: [provide]
};

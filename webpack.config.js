require('path');
require('webpack');

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
       { test: /\.scss$/, exclude: [/node_modules/], loaders: ['style', 'css', 'sass'] }
    ]
  },
  plugins: []
};

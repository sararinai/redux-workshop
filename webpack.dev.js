const path = require('path');
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');

console.log('DEV');

let config = {
  entry: [
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'public/dist'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: []
};


module.exports = config;
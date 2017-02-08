const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './client');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './implementation.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/src',
    host: '0.0.0.0',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};
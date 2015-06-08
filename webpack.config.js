var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
    vendors: ['react/addons', 'react-router', 'material-ui']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {}
  },  
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$/, 
        loader: 'jsx-loader', 
        exclude:[node_modules_dir] 
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!' + 'sass?sourceMap')
      }      
    ]
  },
  plugins: [
    new ExtractTextPlugin("test.css", { allChunks: true }), 
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]  
};

module.exports = config;
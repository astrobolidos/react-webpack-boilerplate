 var webpack = require('webpack');
 var path = require('path');
 var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(path);
  },  
  entry: ['./src/app.js'],
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {}
  },  
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader', exclude:[node_modules_dir] }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('app', null, false)
  ]  
};

config.addVendor('react', path.resolve(node_modules_dir, 'react/dist/react.min.js'));

module.exports = config;
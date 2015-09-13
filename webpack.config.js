var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
    vendors: ['react/addons', 'react-router', 'material-ui']
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
     modulesDirectories: ["src", "node_modules"]
  },  
  module: {
    noParse: [],
    loaders: [{
      test: /\.js$/, 
      loader: 'jsx-loader', 
      exclude:[node_modules_dir] 
    },
    {
      test: /\.scss$/,
      loader: "style-loader"
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    
  ]  
};

module.exports = config;
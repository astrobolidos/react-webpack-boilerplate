module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};
var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './public/index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: ''
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react')
        },
        fallback: path.resolve(__dirname, './node_modules')
    },
    resolveLoader: {
        fallback: path.resolve(__dirname, './node_modules')
    }
}

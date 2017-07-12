const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    }],
  },
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js')
    }
  }
}
var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/app.js',

  output: {
    path: __dirname + '/prd/',
    // filename: 'bundle-[hash].js'
    filename: 'bundle.js'
  },


  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },{
        test: /\.scss$/,
        // loader: 'style!css!sass'
        loader: ET.extract('style', 'css!sass')
      },{
        test:/\.js$/,
         loader:'babel'
      },
      {
        test: /\.js$/,
        //loader: 'babel-loader?presets[]=es2015',
        loader: 'jsx-loader'
      }]
  },
  devServer: {
    contentBase: __dirname + '/prd',
    port: 8080,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css')
  ]
}
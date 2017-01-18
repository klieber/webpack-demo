var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: 'http://localhost:8080/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: [ 'ng-annotate-loader', 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    publicPath: 'http://localhost:8080/dist/'
  }
};

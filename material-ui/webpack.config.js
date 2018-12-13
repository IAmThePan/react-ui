const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');


function HTMLPlugin (name) {
  return new HtmlWebPackPlugin({
    template: './app/template.html',
    filename: './dist/index.html',
  });
}

const buildPlugins = [
  new CleanWebpackPlugin('./dist'),
  new HtmlWebPackPlugin({
    template: './app/template.html',
    filename: 'index.html',
  }),
];

const config = {
  entry: {
    index: './app/index.js',
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      },
    ],
  },
  plugins: buildPlugins,
  devtool: 'none',
  watchOptions: {
    ignored: /node_modules/,
  },
};

module.exports = config;

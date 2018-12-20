const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

function HTMLPlugin (name) {
  return new HtmlWebPackPlugin({
    template: `./apps/${name}/template.html`,
    filename: `./${name}/index.html`,
    chunks: [name],
  });
}

const buildPlugins = [
  new CleanWebpackPlugin('./dist/*'),
  HTMLPlugin('baseline'),
  HTMLPlugin('material-ui'),
  HTMLPlugin('material-ui-heavy'),
  HTMLPlugin('react-bootstrap'),
  new CopyWebpackPlugin([
    {
      from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
      to: './react-bootstrap/vendor/bootstrap.min.css',
    },
  ]),
];

const config = {
  entry: {
    'baseline': './apps/baseline/index.js',
    'material-ui': './apps/material-ui/index.js',
    'material-ui-heavy': './apps/material-ui-heavy/index.js',
    'react-bootstrap': './apps/react-bootstrap/index.js',
  },
  output: {
    filename: '[name]/index.js',
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

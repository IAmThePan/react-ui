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
  HTMLPlugin('react-bootstrap-2'),
  HTMLPlugin('reactstrap'),
  HTMLPlugin('reactstrap-2'),
  new CopyWebpackPlugin([
    {
      from: './node_modules/bootstrap-3/dist/css/bootstrap.min.css',
      to: './react-bootstrap/vendor/bootstrap.min.css',
    },
      {
        from: './node_modules/bootstrap-4/dist/css/bootstrap.min.css',
        to: './reactstrap/vendor/bootstrap.min.css',
      },
  ]),
];

const config = {
  entry: {
    'baseline': './apps/baseline/index.js',
    'material-ui': './apps/material-ui/index.js',
    'material-ui-heavy': './apps/material-ui-heavy/index.js',
    'react-bootstrap': './apps/react-bootstrap/index.js',
    'react-bootstrap-2': './apps/react-bootstrap-2/index.js',
    'reactstrap': './apps/reactstrap/index.js',
    'reactstrap-2': './apps/reactstrap-2/index.js',
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
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader?pngScale=2',
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

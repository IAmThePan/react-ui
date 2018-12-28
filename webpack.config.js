const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  HTMLPlugin('react-bootstrap-3'),
  HTMLPlugin('react-bootstrap-4'),
  HTMLPlugin('react-bootstrap-next'),
  HTMLPlugin('react-bootstrap-next-2'),
  HTMLPlugin('react-bootstrap-next-3'),
  HTMLPlugin('react-bootstrap-next-4'),
  HTMLPlugin('reactstrap'),
  HTMLPlugin('reactstrap-2'),
  HTMLPlugin('reactstrap-3'),
  HTMLPlugin('reactstrap-4'),
  HTMLPlugin('react-foundation'),
  HTMLPlugin('react-foundation-2'),
  HTMLPlugin('react-foundation-3'),
  HTMLPlugin('react-foundation-4'),
  new CopyWebpackPlugin([
    {
      from: './node_modules/bootstrap-3/dist/css/bootstrap.min.css',
      to: './react-bootstrap/vendor/bootstrap.min.css',
    },
    {
      from: './node_modules/bootstrap-4/dist/css/bootstrap.min.css',
      to: './react-bootstrap-next/vendor/bootstrap.min.css',
    },
    {
      from: './node_modules/bootstrap-4/dist/css/bootstrap.min.css',
      to: './reactstrap/vendor/bootstrap.min.css',
    },
    {
      from: './node_modules/foundation-sites/dist/css/foundation.min.css',
      to: './react-foundation/vendor/foundation.min.css',
    },
  ]),
  new MiniCssExtractPlugin({
    filename: "[name]/styles.css",
    chunkFilename: "[id].css"
  })
];

const config = {
  entry: {
    'baseline': './apps/baseline/index.js',
    'material-ui': './apps/material-ui/index.js',
    'material-ui-heavy': './apps/material-ui-heavy/index.js',
    'react-bootstrap': './apps/react-bootstrap/index.js',
    'react-bootstrap-2': './apps/react-bootstrap-2/index.js',
    'react-bootstrap-3': './apps/react-bootstrap-3/index.js',
    'react-bootstrap-4': './apps/react-bootstrap-4/index.js',
    'react-bootstrap-next': './apps/react-bootstrap-next/index.js',
    'react-bootstrap-next-2': './apps/react-bootstrap-next-2/index.js',
    'react-bootstrap-next-3': './apps/react-bootstrap-next-3/index.js',
    'react-bootstrap-next-4': './apps/react-bootstrap-next-4/index.js',
    'reactstrap': './apps/reactstrap/index.js',
    'reactstrap-2': './apps/reactstrap-2/index.js',
    'reactstrap-3': './apps/reactstrap-3/index.js',
    'reactstrap-4': './apps/reactstrap-4/index.js',
    'react-foundation': './apps/react-foundation/index.js',
    'react-foundation-2': './apps/react-foundation-2/index.js',
    'react-foundation-3': './apps/react-foundation-3/index.js',
    'react-foundation-4': './apps/react-foundation-4/index.js',
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
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'apps/react-bootstrap-next-4'),
          path.resolve(__dirname, 'apps/reactstrap-4'),
          path.resolve(__dirname, 'apps/react-foundation-4'),
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.less/,
        exclude: [
          path.resolve(__dirname, 'apps/react-bootstrap-4'),
        ],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'apps/react-bootstrap-next-4'),
          path.resolve(__dirname, 'apps/reactstrap-4'),
          path.resolve(__dirname, 'apps/react-foundation-4'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.less/,
        include: [
          path.resolve(__dirname, 'apps/react-bootstrap-4'),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              },
            },
          },
          {
            loader: 'less-loader',
          },
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

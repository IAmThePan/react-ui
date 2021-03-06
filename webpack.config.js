const path = require('path');
const glob = require('glob');
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
  HTMLPlugin('material-ui'),
  HTMLPlugin('material-ui-0'),
  HTMLPlugin('material-ui-2'),
  HTMLPlugin('material-ui-3'),
  HTMLPlugin('material-components-web-react'),
  HTMLPlugin('material-components-web-react-2'),
  HTMLPlugin('material-components-web-react-3'),
  HTMLPlugin('material-components-web-react-4'),
  HTMLPlugin('react-material-components-web'),
  HTMLPlugin('react-material-components-web-2'),
  HTMLPlugin('rmwc'),
  HTMLPlugin('rmwc-2'),
  HTMLPlugin('rmwc-3'),
  HTMLPlugin('rmwc-4'),
  HTMLPlugin('prime-react'),
  HTMLPlugin('prime-react-2'),
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
    {
      from: './node_modules/foundation-sites/dist/css/foundation-float.min.css',
      to: './react-foundation/vendor/foundation-float.min.css',
    },
    {
      from: './node_modules/@material/react-layout-grid/dist/layout-grid.min.css',
      to: './material-components-web-react/vendor/layout-grid.min.css',
    },
    {
      from: './node_modules/@material/react-button/dist/button.min.css',
      to: './material-components-web-react/vendor/button.min.css',
    },
    {
      from: './node_modules/@material/react-tab-bar/dist/tab-bar.min.css',
      to: './material-components-web-react/vendor/tab-bar.min.css',
    },
    {
      from: './node_modules/@material/react-tab-scroller/dist/tab-scroller.min.css',
      to: './material-components-web-react/vendor/tab-scroller.min.css',
    },
    {
      from: './node_modules/@material/react-tab/dist/tab.min.css',
      to: './material-components-web-react/vendor/tab.min.css',
    },
    {
      from: './node_modules/@material/react-tab-indicator/dist/tab-indicator.min.css',
      to: './material-components-web-react/vendor/tab-indicator.min.css',
    },
    {
      from: './node_modules/@material/typography/dist/mdc.typography.min.css',
      to: './material-components-web-react/vendor/typography.min.css',
    },
    {
      from: './node_modules/material-components-web/dist/material-components-web.min.css',
      to: './react-material-components-web/vendor/material-components-web.min.css',
    },
    {
      from: './node_modules/material-components-web/dist/material-components-web.min.css',
      to: './rmwc/vendor/material-components-web.min.css',
    },
    {
      from: './node_modules/primereact/resources/themes/nova-light/theme.css',
      to: './prime-react/vendor/theme.css',
    },
    {
      from: './node_modules/primereact/resources/primereact.min.css',
      to: './prime-react/vendor/primereact.min.css',
    },
    {
      from: './node_modules/primeflex/primeflex.css',
      to: './prime-react/vendor/primeflex.css',
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
    'material-ui': './apps/material-ui/index.js',
    'material-ui-0': './apps/material-ui-0/index.js',
    'material-ui-2': './apps/material-ui-2/index.js',
    'material-ui-3': './apps/material-ui-3/index.js',
    'material-components-web-react': './apps/material-components-web-react/index.js',
    'material-components-web-react-2': './apps/material-components-web-react-2/index.js',
    'material-components-web-react-3': './apps/material-components-web-react-3/index.js',
    'material-components-web-react-4': './apps/material-components-web-react-4/index.js',
    'react-material-components-web': './apps/react-material-components-web/index.js',
    'react-material-components-web-2': './apps/react-material-components-web-2/index.js',
    'rmwc': './apps/rmwc/index.js',
    'rmwc-2': './apps/rmwc-2/index.js',
    'rmwc-3': './apps/rmwc-3/index.js',
    'rmwc-4': './apps/rmwc-4/index.js',
    'prime-react': './apps/prime-react/index.js',
    'prime-react-2': './apps/prime-react-2/index.js',
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
          path.resolve(__dirname, 'apps/material-components-web-react-4'),
          path.resolve(__dirname, 'apps/rmwc-4'),
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
            options: {
              includePaths: ['node_modules', 'node_modules/@material/*']
              .map((d) => path.join(__dirname, d))
              .map((g) => glob.sync(g))
              .reduce((a, c) => a.concat(c), [])
            },
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
          path.resolve(__dirname, 'apps/material-components-web-react-4'),
          path.resolve(__dirname, 'apps/rmwc-4'),
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
            options: {
              includePaths: ['node_modules', 'node_modules/@material/*']
              .map((d) => path.join(__dirname, d))
              .map((g) => glob.sync(g))
              .reduce((a, c) => a.concat(c), [])
            },
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
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
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

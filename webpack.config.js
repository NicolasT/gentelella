const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'gentelella-react.bundle.js',
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        include: [
          /vendors/,
          /src/,
        ],
        exclude: /node_modules/,
        use: 'script-loader',
      },
      {
        test: /\.css$/,
        include: /vendors/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.(ttf|eot|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: 'url-loader?limit=100000',
      }
    ],
  },
  target: 'web',
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = function(env) {
  const isDemo = env === 'demo';

  config.entry = isDemo ? './production/index.jsx' : './index.js';

  if (isDemo) {
    config.plugins = [
      ...config.plugins,
      new HtmlWebpackPlugin({
        title: 'Gentelella React',
        template: HtmlWebpackTemplate,
        inject: false,
        appMountId: 'content',
      }),
    ];
  }

  return config;
};

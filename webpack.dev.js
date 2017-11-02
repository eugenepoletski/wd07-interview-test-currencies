const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(
  common,
  {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      hotOnly: true,
      inline: true,
      open: true,
      overlay: {
        errors: true,
        warnings: true
      },
      port: 8080,
      proxy: {
        '/api/currencies': 'http://www.cbr.ru/scripts/XML_daily_eng.asp?'
      }
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [ 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader' ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)

module.exports = config;
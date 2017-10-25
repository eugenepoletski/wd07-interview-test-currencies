$ npm init

$ npm install webpack --save-dev

$ mkdir src

$ mkdir dist

$ touch src/index.js
# add file code

$ touch webpack.config.js
# add file code

$ npm install --save-dev style-loader css-loader
# add loaders to webpack.config.js at "modules"

$ npm install --save-dev file-loader
# add loader to webpack.config.js at "modules"

$ npm install --save-dev html-webpack-plugin
# import to webpack.config.js with:
# const HtmlWebpackPlugin = require('html-webpack-plugin');
# add plugin to webpack.config.js at "plugins"

$ npm install --save-dev clean-webpack-plugin
# import to webpack.config.js with:
# const CleanWebpackPlugin = require('clean-webpack-plugin');
# add plugin to webpack.config.js at "plugins"

$ npm install --save-dev webpack-manifest-plugin
# import to webpack.config.js with:
# const ManifestWebpackPlugin = require('webpack-manifest-plugin');
# add plugin to webpack.config.js at "plugins"

$ npm install --save-dev webpack-dev-server
$ npm install --save-dev express webpack-dev-middleware
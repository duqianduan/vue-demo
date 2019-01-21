/**
 * @file dev configuration.
 */

var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var packageJson = require('../package.json');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {
    output: {
        publicPath: config.dev.assetsPublicPath,
        filename: utils.assetsPath('js/[name].js'),
        chunkFilename: utils.assetsPath('views/[name].js')
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            extract: true
        })
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].css')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // generate index html
        new HtmlWebpackPlugin({
            title: packageJson.title,
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ],
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map'
});


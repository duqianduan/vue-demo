/**
 * @file build configuration.
 */

const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const packageJson = require('../package.json');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'views/[name].[chunkhash].js'
    },
    devtool: config.build.useSourceMap ? config.build.devtool : false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: config.build.useSourceMap
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HtmlWebpackPlugin({
            title: packageJson.title,
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new ZipWebpackPlugin({
            filename: 'me.zip'
        })
    ]
});

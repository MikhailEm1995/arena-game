const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        client: './app/client.js',
        server: './app/server.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name]/[name].js"
    },

    devtool: "inline-source-map",
    devServer: {
        contentBase: './build'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'postcss-loader'
                })
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Arena',
            template: 'app/view/index.ejs',
            excludeChunks: ['server'],
            favicon: 'app/view/images/favicon.ico'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};

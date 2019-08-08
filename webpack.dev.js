const base = require('./webpack.config.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base,{
    mode: 'development',
    devServer: {
        contentBase: './dist/lib',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ts',
        })
    ],
})
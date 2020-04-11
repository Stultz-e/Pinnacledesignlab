const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, { 
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin(),
            new HtmlWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'project1.html',
                template: './src/project1.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'project2.html',
                template: './src/project2.html',
            }),
            new HtmlWebpackPlugin({
                filename: 'project2.html',
                template: './src/project2.html',
            }),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename:"[name].[contentHash].css" }), 
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: [                
                MiniCssExtractPlugin.loader, // 3. Extract css into files 
                "css-loader", //2. turns css into common js
                "sass-loader", // 1. turns sass into css         
                ]
            }
        ]
    }
});
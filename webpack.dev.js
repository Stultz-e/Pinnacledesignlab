const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge"); // plugin that merges common with others,
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, { 
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'project1.html',
            template: "./src/project1.html",
        })
    ],
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [
            "style-loader", // 3. Inject styles into DOM
            "css-loader", //2. turns css into common js
            "sass-loader", // 1. turns sass into css
            ]
        },
    ]},
});
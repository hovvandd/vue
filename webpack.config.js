const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// Определим HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },   
            {
                test: /\.scss$/,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            }        
        ],
 
    },    
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new VueLoaderPlugin()
    ]
}


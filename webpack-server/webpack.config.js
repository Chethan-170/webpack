const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './index.js',
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    devServer:{
        port: 3000,
        open: true, 
        static: {
            directory: path.join(__dirname, 'public'),
        }
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    }
};
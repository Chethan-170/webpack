const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './index.js',
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    devServer:{
        port: 3000,
        open: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader'],
            }
        ]
    }
};
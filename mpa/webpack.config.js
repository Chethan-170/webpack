const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
    entry: {
        home: './src/js/index.js',
        about: './src/js/about.js',
        profile: './src/js/profile.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    mode:'production',
    plugins:[
        new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'home.html',
      chunks: ['home'], // only include home.js bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'], // only include about.js bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/profile.html',
      filename: 'profile.html',
      chunks: ['profile'], // only include profile.js bundle
    }),

    ]
}
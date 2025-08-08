const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // Handles CSS files: injects styles into DOM and resolves @import/url() in CSS
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                // Handles PNG images: emits a separate file and exports the URL
                test:/\.(png)$/i,
                type:'asset/resource'
            },
            {
                // Handles SVG images: inlines the SVG as a data URI in the bundle
                test:/\.(svg)$/i,
                type:'asset/inline'
            },
            {
                // Handles TXT files: imports file content as a string (source code)
                test:/\.(txt)$/i,
                type:'asset/source'
            },
            {
                // Handles JPG images: automatically chooses between inlining (as data URI) or emitting a file
                // If the file is smaller than 2MB, it will be inlined; otherwise, emitted as a separate file
                test:/\.(jpg)$/i,
                type:'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize:  2 * 1024 * 1024 
                    }
                }
            },
            {
                test :/\.(ttf)$/i,
                type: 'asset/resource',
                generator:{
                    filename:'fonts/[name]-test-[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'Webpack CSS Loader Demo'})
    ]
}
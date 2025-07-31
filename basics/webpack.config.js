import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, 'sounds', 'pozyvnye-radio-mayak1980-god.mp3')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'scripts', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'timeProj'),
        filename: '[name][contenthash].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ],
            },
            {
                test: /\.mp3$/,
                use: [
                    'file-loader'
                ],
                include: src,
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],
};
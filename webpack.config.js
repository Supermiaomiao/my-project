const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'bundle_[chunkhash:8].js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        // 配置相应的规则
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js[x]?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            constant: path.resolve(
                __dirname + '/src/graphy/constant.js',
            ),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};

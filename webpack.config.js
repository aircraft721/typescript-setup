const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') 
    },
    stats: 'errors-warnings',
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new ESLintPlugin({
            files: './src/**/*.ts',
            emitWarning: true
        }),
    ]
}
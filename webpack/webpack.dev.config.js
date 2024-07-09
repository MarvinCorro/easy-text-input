const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: [
        path.join(__dirname, '../src/index.js'),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ],
          exclude: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.svg$/,
          use: 'file-loader'
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        hot: true,
        static: './dist',
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html',
            title: 'Development',
        }),
        new webpack.LoaderOptionsPlugin({debug: true}),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [
    path.join(__dirname, '../src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    globalObject: 'this',
    library: {
      filename: 'main.js',
      name: '@epiphanyzz/easy-text-input',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react:  {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_',
    },
    'react-dom':  {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: '_',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: 'Production build',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcDir = '../src/';

module.exports = {
  entry: {
    popup: path.join(__dirname, `${srcDir}/popup/index.tsx`),
    options: path.join(__dirname, `${srcDir}options.ts`),
    background: path.join(__dirname, `${srcDir}background.ts`),
    content_script: path.join(__dirname, `${srcDir}content_script.ts`),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // exclude locale files in moment
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {},
    }),
    new HtmlWebpackPlugin({
      filename: '../popup.html', // Name of file in ./dist/
      template: './src/popup/index.html', // Name of template in ./src
      chunks: ['popup'],
    }),
  ],
};

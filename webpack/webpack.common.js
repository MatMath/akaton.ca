const webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const srcDir = '../src/';

module.exports = {
  entry: {
    popup: path.join(__dirname, `${srcDir}index.tsx`),
    options: path.join(__dirname, `${srcDir}options.ts`),
    background: path.join(__dirname, `${srcDir}background.ts`),
    content_script: path.join(__dirname, `${srcDir}content_script.ts`),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  // devServer: {
  //   contentBase: "./dist", // Content base
  //   inline: true, // Enable watch and live reload
  //   host: "localhost",
  //   port: 8080,
  //   stats: "errors-only"
  // },
  // optimization: {
  //   splitChunks: {
  //     name: 'vendor',
  //     chunks: 'initial',
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"]
      // }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // exclude locale files in moment
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {},
    }),
    // new HtmlWebpackPlugin({
    //   filename: "../popup.html", //Name of file in ./dist/
    //   template: "./src/index.html", //Name of template in ./src
    //   chunks: ['popup']
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ],
};

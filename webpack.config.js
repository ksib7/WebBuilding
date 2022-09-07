const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");

module.exports = {
  entry: "./dateDiff/js/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.[contenthash].js",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name][contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "./dateDiff/index.html"),
    }),
  ],
};

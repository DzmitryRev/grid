const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

module.exports = {
  mode,
  target,
  plugins,
  //   devtool: "source-map",
  entry: "./src/index.js",
  devServer: {
    // hot: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true,
    // publicPath: "./",
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource",
      },
    ],
  },
};

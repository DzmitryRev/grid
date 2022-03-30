const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "./styles.css",
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "./src/assets",
    //       to: "assets",
    //     },
    //   ],
    // }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: "/",
          name: `assets/[name].[ext]`,
        },
      },
    ],
  },
};

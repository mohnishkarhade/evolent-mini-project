const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");
const dotenv = require("dotenv");

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: process.env.NODE_ENV,
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
    },
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.s?css?$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg/,
          type: "asset/inline",
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        publicPath: process.env.PUBLIC_URL,
        favicon: "./public/favicon.ico",
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: "./public/assets/img",
      //       to: "assets/img",
      //     },
      //   ],
      // }),
    ],
  };
};

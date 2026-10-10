const shared = require("./webpack.shared.config.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(shared, {
  mode: "development",
  output: {
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "..", "public/"),
    },
    hot: true,
    open: true,
    client: {
      overlay: true,
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});

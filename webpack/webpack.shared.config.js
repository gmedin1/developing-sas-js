const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const src = path.resolve(__dirname, "..", "src");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "..", "dist/"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[contenthash:12][ext]",
        },
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          // {{img "x.png"}} y {{data "componente"}} viven en src/helpers
          helperDirs: [path.join(src, "helpers")],
          // {{> services}} -> src/components/services/services.hbs
          partialResolver(partial, callback) {
            callback(
              null,
              path.join(src, "components", partial, `${partial}.hbs`)
            );
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(src, "index.hbs"),
    }),
  ],
};

module.exports = config;

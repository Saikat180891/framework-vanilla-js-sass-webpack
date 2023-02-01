const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    assetModuleFilename: "[hash][ext][query]",
  },
  devtool: "source-map",
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, "build"),
      },
      {
        directory: path.resolve(__dirname, "public"),
      },
    ],
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
    // Add backend domain
    proxy: {
      "/api": "http://localhost:3000",
    },
    // Enable the below code for http2 during dev
    /*
    http2: true,
    https: {
        key: fs.readFileSync("...path to the file"),
        cert: fs.readFileSync("...path to the file"),
        ca: fs.readFileSync("...path to the file"),
      },
    */
  },
});

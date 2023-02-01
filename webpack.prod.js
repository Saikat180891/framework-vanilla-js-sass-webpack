const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[hash][ext][query]",
  },
  plugins: [new BundleAnalyzerPlugin()],
});

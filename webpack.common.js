const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: "asset/resource",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "./src/templates/index.html",
    }),
    // new webpack.DefinePlugin({
    //   "process.env": JSON.stringify(process.env),
    // }),
    new Dotenv()
  ],
};

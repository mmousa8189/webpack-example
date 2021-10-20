const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Webpack Example App",
      header: "Webpack Example Title",
      metaDesc: "Webpack Example Description",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  mode: "development",
  devServer: {
    // static: path.resolve(__dirname, "dist"),
    open: true,
    port: 3000,
  },
};

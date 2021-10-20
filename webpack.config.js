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
  module: {
    rules: [
      {
        //which describes what kind of files should be transformed.
        test: /\.js$/,
        //which defines the files that shouldn’t be processed from the loader(s), if we have such.
        exclude: /node_modules/,
        //which tells which loader(s) should be used against the matched modules. Here, we can also set the loader options, as we’ve just done with the presets option.
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
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

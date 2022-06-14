const { IgnorePlugin } = require("webpack");
const path = require("path");

const optionalPlugins = [];
if (process.platform !== "darwin") {
  // don't ignore on OSX
  optionalPlugins.push(new IgnorePlugin({ resourceRegExp: /^fsevents$/ }));
}

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  target: "electron-main",
  resolve: {
    alias: {
      ["@"]: path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "main.js",
  },
  plugins: [...optionalPlugins],
};

var path = require("path");
var webpack = require('webpack');

var config = {
  entry: {
    'geocoder': path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].umd.js",
    library: ["[name]"],
    libraryTarget: "umd"
  },
  externals: [
    /^rxjs\//    //.... any other way? rx.umd.min.js does work?
  ],
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.ts$/, use: ['ts-loader'] }, // Support for .ts files.
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};

//Different Environment Setup

if (process.env.NODE_ENV === 'prod') {
  config.module.rules.push({
    test: /\.ts$/, use: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;

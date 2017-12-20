module.exports = {
  entry: './src/geo-code.js',
  output: {
    library: "geoCode",
    libraryTarget: "umd",
    filename: "./dist/geoCode.umd.js"
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }
    ]
  }
};

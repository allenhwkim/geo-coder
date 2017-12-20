module.exports = {
  entry: ['whatwg-fetch', './src/geo-code.js'],
  output: {
    library: "geoCode",
    libraryTarget: "umd",
    filename: "./dist/geoCode.umd.js"
  },
  externals: ['whatwg-fetch']
};

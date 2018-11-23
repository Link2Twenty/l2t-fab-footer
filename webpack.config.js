const webpack = require('webpack');
const path = require('path');
  
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "l2t-fab-footer.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\@polymer/, res => {
      res.request = res.request.replace(/\@polymer/, path.resolve("./node_modules/@polymer"))
    }),
    new webpack.NormalModuleReplacementPlugin(/\@webcomponents/, res => {
      res.request = res.request.replace(/\@webcomponents/, path.resolve("./node_modules/@webcomponents"))
    })
  ]
}
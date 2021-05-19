const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: false,
  entry: './src/js/index',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
}

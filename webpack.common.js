const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      title: 'WebPack Start',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

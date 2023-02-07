const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/views/index.html',
      title: 'WebPack Start',
      filename: 'index.html'
    }),
    new HTMLWebpackPlugin({
      template: './src/views/pages/about.html',
      filename: 'about.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              '...',
              {
                tag: 'img',
                attribute: 'data-src',
                type: 'src'
              },
              {
                tag: 'link',
                attribute: 'href',
                type: 'src'
              }
            ]
          }
        }
      }
    ]
  }
}

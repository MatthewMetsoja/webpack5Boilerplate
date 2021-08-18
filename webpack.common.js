const path = require('path');
const loader = require('sass-loader');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/js/vendor.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 5050,
    open: true,
    // openPage: '/test.html' // use to open a specific page with dev server
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.svg|png|jpg|gif|json$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images/',
            publicPath: 'images/',
            esModule: false,
          },
        },
      },
    ],
  },
};

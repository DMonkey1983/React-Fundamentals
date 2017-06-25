var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('public'),
  entry: ["./src/utils.js","./src/app.js"],
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: 'public'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include:path.resolve('public/style'),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!postcss-loader"
        })
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'eslint-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        include:path.resolve('public/style'),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!autoprefixer-loader!sass-loader"
        })
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.es6', '.jsx']
  }
};

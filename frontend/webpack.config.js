const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader' , 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.js' , '.jsx'],
  },
};

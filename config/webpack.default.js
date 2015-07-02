/* eslint-env node */

const config = {
  entry: [
    './src/main'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  devServer: {
    contentBase: './public',
    noInfo: true,
    inline: true,
    hot: true
  }
};

export default config;

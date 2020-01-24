/**
 * webpack.config.js
 * Webpack configuration for package development environment
 */

// Node Modules
import path from 'path';

module.exports = {
  entry: {
    index: ['./app/index.js'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // Creates style nodes from js strings
          },
          {
            loader: 'css-loader', // Translates css into commonjs
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () =>
                // post css plugins
                [require('precss'), require('autoprefixer')],
            },
          },
          {
            loader: 'less-loader', // Compiles scss code to css
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

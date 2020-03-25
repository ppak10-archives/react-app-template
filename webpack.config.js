/**
 * webpack.config.js
 * Webpack configuration for package development environment
 */

// Node Modules
const path = require('path');

// Constants
import {output} from 'app';

const CONFIG = {
  entry: {
    index: ['./src/index.js'],
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
            loader: 'less-loader', // Compiles LESS code to css
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, output.dist),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = () => {
  switch (process.env.NODE_ENV.trim()) {
    case 'development':
      return {
        ...CONFIG,
        devServer: {
          contentBase: './',
          historyApiFallback: true,
          port: 3000,
        },
      };
    case 'staging':
      return {
        ...CONFIG,
        output: {
          path: path.resolve(__dirname, output.backend),
          filename: '[name].bundle.js',
          publicPath: '/',
        },
      };
    case 'production':
      return {
        ...CONFIG,
        mode: 'production',
      };
  }
};

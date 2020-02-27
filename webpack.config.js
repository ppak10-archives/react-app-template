/**
 * webpack.config.js
 * Webpack configuration for package development environment
 */

// Node Modules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config
const DEVELOPMENT = require('./config/webpack/development.json');

// Plugins
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'index.html'),
  filename: './index.html',
});

let CONFIG = {
  entry: {
    index: ['./src/index.js'],
  },
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
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}



module.exports = () => {
  switch(process.env.NODE_ENV.trim()) {
    case 'development':
      CONFIG = {
        ...CONFIG,
        ...DEVELOPMENT,
      }
      break;
    case 'staging':
      CONFIG = {
        ...CONFIG,
        ...DEVELOPMENT,
        output: {
          path: path.resolve(__dirname, '../backend-repository/static'),
          filename: '[name].bundle.js',
          publicPath: '/',
        }
      }
  }
  return CONFIG;
}

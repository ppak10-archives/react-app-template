/**
 * webpack.config.js
 * Webpack configuration for package development environment
 */

// Node Modules
const path = require('path');

// Constants
const {build, express, local} = require('./app.json');

const CONFIG = {
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
    path: path.resolve(__dirname, build.output.path),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = (env) => {
  if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'development') {
    CONFIG.mode = 'development';
  } else {
    CONFIG.mode = 'production';
  }

  if (env.local) {
    CONFIG.output.path = path.resolve(__dirname, local.output.path);
  } else if (env.express) {
    CONFIG.output.path = path.resolve(__dirname, express.output.path);
  } else {
    CONFIG.devServer = {
      contentBase: './',
      historyApiFallback: true,
      port: 3000,
    };
  }
  return CONFIG;
};

// const path = require('path');
const mode = process.env.DEVELOPMENT && process.env.DEVELOPMENT === 1 ? 'development' : 'production';

module.exports = [{
  mode: mode,
  entry: './src/App.scss',
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [{
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        }
      ]
    }],
  },
}];
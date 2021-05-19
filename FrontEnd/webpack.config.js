const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @returns {import('webpack').Configuration}
 */
function configFactory(_, { mode }) {
  return {
    devtool: mode === 'development' ? 'source-map' : false,
    entry: './src/app/index',
    output: {
      filename: mode === 'production' ? 'bundle.[contenthash].js' : 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };
}

module.exports = configFactory;

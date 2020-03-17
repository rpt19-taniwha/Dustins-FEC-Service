const path = require('path');
const clientDir = path.join(__dirname, '/client');
const publicDir = path.join(__dirname, '/public');
console.log('publidDir', publicDir);
console.log('clientDir', clientDir);

module.exports = {
  mode: "development",
  entry: `${clientDir}/app.jsx`,

  output: {
    filename: "bundle.js",
    path: publicDir
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};

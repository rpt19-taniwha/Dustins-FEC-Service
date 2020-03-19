const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
<<<<<<< HEAD
  entry: `${clientDir}/app.jsx`,

  output: {
    filename: 'bundle.js',
    path: publicDir
=======
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
>>>>>>> 8276d0a4610b5f711c46efcf89abb2344faf051f
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

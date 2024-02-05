const path = require('path');

module.exports = {
  entry: './src/index.js', // Убедитесь, что путь к точке входа верный
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};

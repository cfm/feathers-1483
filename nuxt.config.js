const { resolve } = require('path');
const package = require('./package.json');

module.exports = { // FIXME: tidy
  dev: process.env.NODE_ENV !== 'production',
  srcDir: resolve(__dirname, './ui'),
  env: { apiURL: process.env.API_URL || 'http://localhost:3030' },
};

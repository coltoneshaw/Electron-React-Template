/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webapp = require('./webpack.webapp');
const electron = require('./webpack.electron');

const productionObject = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
};

module.exports = [
  merge(electron, productionObject),
  merge(common, webapp, productionObject),
];

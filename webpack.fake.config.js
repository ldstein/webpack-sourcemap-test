var webpackConfig = require('./webpack.config.js')

webpackConfig.entry           = './index.fake.js';
webpackConfig.output.filename = 'index.fake.build.js';

module.exports = webpackConfig;
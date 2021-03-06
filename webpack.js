// webpack中间件
var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackConf = require('./webpack.config.dev.js');

var server = new webpackDevServer(webpack(webpackConf), {
    publicPath: webpackConf.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    historyApiFallback: true,
    stats: {colors: true}
});

server.listen(3000, '127.0.0.1', function () {
    console.log('Listening at localhost:3000')
});
const base = require("./webpack.base.config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require('./config');
const path = require('path');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

base.plugins = (base.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    //dll映射
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname, './dll', 'vendor.manifest.json'))
    }),
    new AddAssetHtmlPlugin([{ filepath: require.resolve('./dll/vendor.dll.js'), includeSourcemap: false }])    
])

base.devServer = {
    hot: true,
    compress: true,
    inline: true,
    port: config.dev.port,
    host: config.dev.host,
    noInfo: true,
    disableHostCheck: true,
    historyApiFallback: true
}

base.devtool = "#source-map"

module.exports = base
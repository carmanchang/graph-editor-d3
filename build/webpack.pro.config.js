const base = require("./webpack.base.config");
const path = require("path");
const webpack = require("webpack");
const vueConfig = require('./config').vueConfig;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
vueConfig.loaders = Object.assign({}, vueConfig.loaders || {}, {
    stylus: ExtractTextPlugin.extract({
        use: ['css-loader', 'stylus-loader'],
        fallback: 'vue-style-loader'
    })
})

base.plugins = (base.plugins || []).concat([
        new ExtractTextPlugin({
            filename: "css/style.[contenthash].css",
            allChunks: true
        }),
        new CopyWebpackPlugin([{ from: 'static', to: 'static' },{ from: 'src/assets', to: 'src/assets' }]),

        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: "js/vendor.[hash].js",
            minChunks (module) {
                return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
                )
            }
        }),        
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "./src/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                // minifyJS:true
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }

        // }) 
]);

// base.devtool = false;
base.devtool = "#source-map";

module.exports = base
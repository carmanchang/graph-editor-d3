const path = require('path')

const webpack = require('webpack')

const config = require('./config')

const os = require('os');//获取系统信息

const HappyPack = require('happypack') //并行处理

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length}); //共享线程数


module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name].[hash].chunk.js',
        publicPath:"/"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json','.styl']
    },    
    module: {
        noParse: /es6-promise\.js$/,
        rules: [
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: config.vueConfig
            // },
            {
                test: /\.js$/,
                loader: ['happypack/loader?id=babel'],
                exclude: /node_modules/
            },
            {
                test: /\.styl$/, 
                use: ['style-loader','css-loader', 'stylus-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/image/[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new HappyPack({
            id:'babel',
            threads: 4,
            threadPool: happyThreadPool,
            loaders:['babel-loader?cacheDirectory']
        })
    ],
    performance: {
        hints: false
    }
}
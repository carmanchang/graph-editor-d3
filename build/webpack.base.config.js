const path = require('path')

const webpack = require('webpack')

const config = require('./config')

const os = require('os');//获取系统信息

const HappyPack = require('happypack') //并行处理

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length}); //共享线程数


module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name].[hash].chunk.js',
        publicPath:"/dist"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json','.styl','.pug']
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
                // loader: ['happypack/loader?id=babel'],
                loader:'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react','stage-0'],
                    plugins:[
                        'transform-runtime',
                        "transform-decorators-legacy",
                        "typecheck",
                    "syntax-flow",
                    "transform-flow-strip-types",
                    "transform-regenerator",
                    "transform-object-rest-spread"]
                }
            },
            {
                test: /\.styl$/, 
                use: ['style-loader','css-loader', 'stylus-loader']
            },
            {
                test: /\.(css|sass|scss)$/, 
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.pug$/, 
                // use: ['html-loader','pug-html-loader']
                use: ['pug-loader']
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
        // new HappyPack({
        //     id:'babel',
        //     threads: 4,
        //     threadPool: happyThreadPool,
        //     loaders:['babel-loader?cacheDirectory']
        // })
    ],
    performance: {
        hints: false
    }
}
const path = require('path')

const DllPlugin = require('webpack/lib/DllPlugin');

const webpack = require('webpack')

const pack = require('../package.json')

module.exports = {
	entry:{
		vendor: Object.keys(pack.dependencies)
	},
	output:{
		filename:'[name].dll.js',
		path:path.resolve(__dirname, './dll'),
		//library 可设置库的名称 防止全局变量冲突 为_dll_vue...
		library: '_dll_[name]'
	},
	plugins:[
		//生成映射
		new DllPlugin({
			name: '_dll_[name]', 
			path: path.resolve(__dirname, './dll', '[name].manifest.json')
		})		
	]
}


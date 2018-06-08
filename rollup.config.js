import babel from 'rollup-plugin-babel';
import copy from 'rollup-copy-plugin';
import minify from 'rollup-plugin-minify'
import regenerator from 'rollup-plugin-regenerator';
 
const { name, version } = require('./package.json');
const banner = `/*!
* ${name} v${version}
* (c) 2018 Vitaliy Stoliarov
* Released under the MIT License.
*/`;

export default [{
    input: 'src/index.js',
    output: {
        file: 'build/app.js',
        sourcemap: true,
        format: 'umd',
        name: 'App',
        banner
    },
    plugins: [
        babel(),
        regenerator(),
        // minify({
        //     umd: {
        //         dest: 'build/app.min.js',
        //         ie8: true,
        //         output: {
        //             beautify: false,
        //             preamble: banner
        //         }
        //     }
        // })
    ]
}
];
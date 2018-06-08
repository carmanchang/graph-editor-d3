
module.exports = {
    vueConfig: {
        preserveWhitespace: false,
        postcss: [
            require('autoprefixer')({
                browsers: ['last 3 versions']
            })
        ]
    },
    dev: {
        port: 9090,
        // host: '0.0.0.0'
        host: 'localhost'
    }
}
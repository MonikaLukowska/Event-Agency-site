const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'src')
    },
    devServer: {
        before: function(src, server) {
            server._watch('./src/**/*.html')
        },
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    //watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    },

}
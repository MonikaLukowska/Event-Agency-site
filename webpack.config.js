const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

class RunAfterCompile{
    apply(compiler){
        compiler.hooks.done.tap('Copy images', function(){
            fse.copySync('./src/images', './dist/images')
        })
       compiler.hooks.done.tap('Copy fonts', function(){
            fse.copySync('./src/fonts', './dist/fonts')
        })
    }
}

let cssConfig = {
                test: /\.css$/i,
                use: ['css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
}
//css-loader
let pages = fse.readdirSync('./src').filter(function(file){
    return file.endsWith('.html')
}).map(function(page){
    return new HtmlWebpackPlugin({
        filename: page,
        template: `./src/${page}`
    })
})

let config = {
    entry: './src/js/index.js',
    plugins: pages, //[new HtmlWebpackPlugin({filename: 'index.html', template:'./src/index.html'})],
     module: {
        rules: [
            cssConfig
        ]
    }
}

if(currentTask == 'dev') {
    cssConfig.use.unshift('style-loader')
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'src')
    }
    config.devServer = {
        before: function(src, server) {
            server._watch('./src/**/*.html')
        },
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    }
    config.mode = 'development'
}

if(currentTask == 'build') {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    })

    cssConfig.use.unshift(MiniCssExtractPlugin.loader)
    postCSSPlugins.push(require('cssnano'))
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = 'production'
    config.optimization = {
        splitChunks: {chunks: 'all'}
    }
    config.plugins.push(
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
        new RunAfterCompile()
    )
}

module.exports = config 
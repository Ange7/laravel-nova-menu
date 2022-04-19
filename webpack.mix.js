let mix = require('laravel-mix')

mix.setPublicPath('dist')
   .js('resources/js/tool.js', 'js').vue({ version: 3 }).webpackConfig({
    externals: {
        vue: 'Vue',
    },
    output: {
        uniqueName: 'vendor/package',
    }
    })
   .sass('resources/sass/tool.scss', 'css')

let path = require('path')

mix.alias({
    'laravel-nova': path.join(__dirname, '../../vendor/laravel/nova/resources/js/mixins/packages.js'),
})

const path = require('path')

module.exports = {
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
        extensions: ['.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main'],
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true,
                    },
                },
            },
        ],
    },
}

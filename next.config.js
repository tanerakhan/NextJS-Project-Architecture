const isProd = process.env.NODE_ENV === 'production'

// Enable importing of css stylesheets
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const getBasePath = () => {
    var basePath = ''

    if (isProd && process.env.BASE_PATH) {
        if (process.env.BASE_PATH.startsWith('/')) {
            basePath = process.env.BASE_PATH
        } else {
            basePath = '/' + process.env.BASE_PATH
        }
    }

    console.log('getBasePath() : isProd = ' + isProd)
    console.log('getBasePath() : basePath = ' + basePath)

    return basePath
}

module.exports = withPlugins(
    [],
    {
        assetPrefix: getBasePath(),
        publicRuntimeConfig: {
            basePath: getBasePath(),
        },
        experimental: { scss: true },
        devIndicators: {
            autoPrerender: false,
        },
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]',
        },
    },
    withPWA(getBasePath)
)

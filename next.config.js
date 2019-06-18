const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
/* 
module.exports = {
    exportPathMap: async function(defaultPathMap) {
      return {
        '/': { page: '/', query: { title: 'Home page' }},
        '/about': { page: '/about', query: { title: 'About page' } }
      }
    },
    webpack: config => {
      config.node = {
        fs: 'empty'
      }
      return config
    }
  } */
  module.exports = withImages(
    withSass({
      sassLoaderOptions: {
        includePaths: ['/static/styles/']
      },
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]'
      }
    })
  );
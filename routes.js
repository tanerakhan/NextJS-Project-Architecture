const routes = require('next-routes');

module.exports = routes()
.add({
  name: 'homeRoute',
  pattern: '/',
  page: '/'
})
.add({
    name: 'about',
    pattern: '/about',
    page: '/about'
})


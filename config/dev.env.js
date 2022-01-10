'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8081"', //开发访问接口,这里一定要在单引号中间加双引号否则活报错
  Mock: true
})

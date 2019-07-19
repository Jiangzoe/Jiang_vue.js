
const {
  Nuxt,
  Builder   // mvc req res pages/index.vue
} = require('nuxt')

const models = require('./models')
const express = require('express')

const app = express()
const path = require('path')
const config = require('../nuxt.config')
const start = async() => {
  const nuxt = new Nuxt(config)
  if(true){
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(nuxt.render)   //使用此中间件

  app.listen(3025,() => {
    console.log('sever started at 127.0.0.1:3025')
  })
}
start()
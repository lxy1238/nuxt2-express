import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
import globalConfig from './api/config'
const host = process.env.HOST || globalConfig.app.host
const port = process.env.PORT || globalConfig.app.port
const app = express()
import indexRouter from './api/routes/index'

app.set('port', port)


import  config from '../nuxt.config.js'
// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production')


app.use('/api', indexRouter)

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }


  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

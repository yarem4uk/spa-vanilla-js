import path from 'path'
import morgan from 'morgan'

import Express from 'express'

export default () => {
  const app = new Express()

  app.use(morgan('dev'))
  app.use('/assets', Express.static(path.join(__dirname, 'public')))

  app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  return app
}

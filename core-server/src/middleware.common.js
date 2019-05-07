
const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')

const whoIsThis = require('./middlewares/auth')

module.exports = function middelwaresRequest(app) {
  app.use(logger(':method :url :status :res[content-length] - :response-time ms'))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }));

  app.use(cookieParser())

  app.use(express.static(path.join(__dirname, 'public')))

  whoIsThis(app)
}

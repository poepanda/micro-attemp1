const express = require('express')

const commonMiddlewares = require('./middleware.common')
const getCacheIfAny = require('./middlewares/request-cache').get
const middlewaresForNewRequest = require('./middleware.newRequest')
const importRoutes = require('./importRoutes')
const importApi = require('./importApi')
const errorHandlers = require('./middlewares/errorHandlers')

const app = express()

commonMiddlewares(app)
app.use(getCacheIfAny)
app.use(importApi)
middlewaresForNewRequest(app)
importRoutes(app)
errorHandlers(app)

module.exports = app

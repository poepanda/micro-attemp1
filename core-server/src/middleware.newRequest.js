const domainConfig = require('./middlewares/domainConfig')

module.exports = function(app) {
  app.use(domainConfig)
}
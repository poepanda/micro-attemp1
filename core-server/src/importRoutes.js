const dynamicPage = require('./routes/dynamicPage')

module.exports = function importRoutes(app) {
  app.get('*', dynamicPage)
}
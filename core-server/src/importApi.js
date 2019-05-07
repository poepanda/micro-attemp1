const api = require('./api/gateway/__mocks__');

module.exports = function injectApi(req, res, next) {
  res.locals.api = api;
  next();
}
const cacheModule = require('cache-module')

const get = function(req, res, next) {
  const requestCache = cacheModule.getCache(cacheModule.getKey());
  return requestCache ? res.end(requestCache) : next();
}

module.exports = {
  get,
}
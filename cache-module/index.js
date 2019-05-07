const getCache = function(key) {
  return key ? 'cachedRespomse' : null;
}

const getKey = function() {
  return null;
}

module.exports = {
  getCache,
  getKey,
}
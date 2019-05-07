const config = require('../temp-configuration/layouts.json');

module.exports = {
  get: (type) => {
    if (!type) {
      return config.layouts
    }
  }
}
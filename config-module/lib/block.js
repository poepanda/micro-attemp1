const config = require('../temp-configuration/blocks.json');

module.exports = {
  get: (type) => {
    if (!type) {
      return config.blocks
    }
  }
}
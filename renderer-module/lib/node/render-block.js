const renderBlockSSR = require('./block/server-side-render')
const renderBlockCSR = require('./block/client-side-render')

module.exports = function(block, config, options) {
  if (block.renderMode === 'client') {
    return renderBlockCSR(block, config)
  }
  return renderBlockSSR(block, config)
}
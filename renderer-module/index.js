const nodeRenderBlock = require('./lib/node/render-block')
const nodeRenderPage = require('./lib/node/render-page')

module.exports = {
  server: {
    renderBlock: nodeRenderBlock,
    renderPage: nodeRenderPage,
  }
}
const configModule = require('config-module')
const renderPage = require('renderer-module').server.renderPage

const getPageConfig = function(api, path) {
  return api.getPageConfig(path)
}

module.exports = function(req, res, next) {
  const pageConfig = getPageConfig(res.locals.api, req.path);
  const layouts = configModule.layout.get();
  const blocks = configModule.block.get();
  console.log('Config...', pageConfig);
  // Render the initial page
  // Dont need to care about how it's rendered
  renderPage(pageConfig, {
    layouts,
    blocks,
  }).then((html) => {
    return pageConfig ? res.send(html) : next();
  });
}
const baseTemplate = require('./templates/base');
const renderBlock = require('./render-block');
const Promise = require('bluebird')
const map = require('lodash/map')

const getCssLinks = function(blocks, blocksConfig) {
  const links = []
  map(blocks, block => {
    const link = blocksConfig[block.type].render.css;
    console.log(links, link, links.indexOf(link));
    if (links.indexOf(link) < 0) {
      links.push(link)
    }
  })

  return map(links, link => `<link href="${link}" rel="stylesheet" />`).join('\n');
}

const getContainersHtml = function(blocks, renderedBlocks) {
  // Temp hard coded containers
  let leftContainerHtml = ''
  let rightContainerHtml = ''
  map(blocks, (block, index) => {
    if (block.container === 'left-container') {
      leftContainerHtml += renderedBlocks[index]
    } else {
      rightContainerHtml += renderedBlocks[index]
    }
  })
  return `
    <div class="container">
      <div class="left-container">
        ${leftContainerHtml}
      </div>
      <div class="right-container">
        ${rightContainerHtml}
      </div>
    </div>
  `
}

module.exports = function(pageConfig, options) {
  const { layouts, blocks } = options
  const pageContent = '';
  return new Promise((resolve) => {
    Promise.map(pageConfig.blocks, (block) => {
      return renderBlock(block, blocks[block.type])
    })
    .then((renderedBlocks) => {
      const pageContent = getContainersHtml(pageConfig.blocks, renderedBlocks);
      const cssLinks = getCssLinks(pageConfig.blocks, blocks);
      const html = baseTemplate({
        cssLinks,
        pageContent,
      })
      resolve(html)
    })
  })
}
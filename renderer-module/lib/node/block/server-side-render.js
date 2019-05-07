const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const Promise = require('bluebird')
const get = require('lodash/get')

const react = require('react')
const renderToString = require('react-dom/server').renderToString

function renderBlock(bundleFileName, block) {
  const blockComponent = require(`../bundles/${bundleFileName}`);
  const blockHtml = renderToString(
    react.createElement(
      blockComponent.default || blockComponent,
      block.rootProps || {}
    )
  )
  return `
    <div class="block-slot" style="${get(block, 'slot.style')}">
      ${blockHtml}
    </div>
  `;
}

function saveBundleFile(bundleFileName, body, block) {
  return new Promise((resolve, reject) => {
    const bundleFilePath = path.resolve(__dirname, '../bundles/', bundleFileName)
    console.log('FILE PATH', bundleFilePath)
    fs.writeFile(bundleFilePath, body, (err) => {
      if (err) {
        console.log('Error: ', err)
        reject(err);
      }
      resolve(renderBlock(bundleFileName, block))
    })
  })
}

module.exports = function(block, config) {
  const savedBundleFileName = `${config.project}.${path.basename(config.render.serverRenderBundle)}`
  return fetch(config.render.serverRenderBundle)
    .then((res) => res.text())
    .then((body) => { return saveBundleFile(savedBundleFileName, body, block) })
}
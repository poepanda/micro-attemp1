const placeholderHmlt = {
  'grey-box': `
    <div style="width: 100%;height: 100%;background-color: #cecece"></div>
  `
}

module.exports = function(type) {
  const html = placeholderHmlt[type]
  return html || placeholderHmlt['grey-box']
}
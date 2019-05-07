const baseInlineCss = `
<style>
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 1280px;
    margin: auto;
  }

  .left-container {
    float: left;
    width: 30%;
  }
  .right-container {
    padding-left: 4px;
    float: right;
    width: 70%;
  }

  .block-slot {
    height: 250px;
    padding: 2px 0;
  }
</style>
`
module.exports = function({ cssLinks, pageContent }) {
  return `
<html>
  <head>
    <title>Westeros</title>
    ${baseInlineCss}
    ${cssLinks}
  </head>
  <body>
    ${pageContent}
  </body>
</html>
  `
}
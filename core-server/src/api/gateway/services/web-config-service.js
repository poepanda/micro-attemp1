module.exports = {
  getPageConfig: (path) => {
    this.post(`/page-config`, { path })
  }
}
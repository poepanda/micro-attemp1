module.exports = {
  getMerchant: (id) => {
    this.get(`/v1/merchant/${id}`)
  }
}
const { RESTDataSource } = require('apollo-datasource-rest');

class MyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.v1.products.example.com/'; //fake API endpoint
  }

  // Example method to fetch data from API
  async getItem(id) {
    return this.get(`items/${id}`);
  }
}

module.exports = MyAPI;
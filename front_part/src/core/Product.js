import axios from '../http/axios'

export default class ProductInterface {
  static getAllProducts () {
    return axios.get('/products')
  }

  static getAllLocationsOfProducts () {
    return axios.get('/products/locations')
  }

  static getProductsByLocation (location) {
    return axios.get(`/products/location/${location}`)
  }
}

import { ADD_PRODUCT } from '../constants'

export function addProduct(data) {
  return {
    type: ADD_PRODUCT,
    data,
  }
}

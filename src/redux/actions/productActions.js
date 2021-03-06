import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT_OF_THE_DAY } from '../constants'

export function addProduct(data) {
  return {
    type: ADD_PRODUCT,
    data,
  }
}

export function updateProductOfTheDay(data) {
  return {
    type: UPDATE_PRODUCT_OF_THE_DAY,
    data,
  }
}

export function removeProduct(data) {
  return {
    type: REMOVE_PRODUCT,
    data,
  }
}
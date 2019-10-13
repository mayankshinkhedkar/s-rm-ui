import { ADD_USER } from '../constants'

export function addtUser(data) {
  return {
    type: ADD_USER,
    data,
  }
}

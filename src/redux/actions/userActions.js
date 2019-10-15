import { ADD_USER, REMOVE_USER } from '../constants'

export function addtUser(data) {
  return {
    type: ADD_USER,
    data,
  }
}

export function removeUser(data) {
  return {
    type: REMOVE_USER,
    data,
  }
}

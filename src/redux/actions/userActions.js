import { ADD_USER, FETCHING_USER, FETCHING_USER_SUCCESS, FETCHING_USER_FAILURE } from '../constants'

export function fetchUsersFromAPI() {
  return (dispatch) => {
    dispatch(getUsers())
    try {
      dispatch(getUsersSuccess())
    } catch (error) {
      dispatch(getUsersFailure(error))
    }
  }
}

export function getUsers() {
  return {
    type: FETCHING_USER
  }
}

export function getUsersSuccess(data = []) {
  return {
    type: FETCHING_USER_SUCCESS,
    data,
  }
}

export function addtUser(data) {
  return {
    type: ADD_USER,
    data,
  }
}

export function getUsersFailure() {
  return {
    type: FETCHING_USER_FAILURE
  }
}

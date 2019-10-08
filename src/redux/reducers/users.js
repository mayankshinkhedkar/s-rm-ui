import { ADD_USER, FETCHING_USER, FETCHING_USER_SUCCESS, FETCHING_USER_FAILURE } from '../constants'

const initialState = {
  users: [],
  isFetching: false,
  error: false
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      let newUser = state.users;
      newUser.push(action.data);
      return {
        ...state,
        users: newUser,
        isFetching: false,
        error: false
      }
    case FETCHING_USER:
      return {
        ...state,
        users: [],
        isFetching: true
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.data
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
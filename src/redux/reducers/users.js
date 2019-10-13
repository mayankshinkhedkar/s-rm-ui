import { ADD_USER } from '../constants'

let users = [{
  firstName: "Jon",
  lastName: "Von",
  email: "jon.von@mailinator.com",
  password: "jonvon",
  userType: "admin",
  policy: true,
}]

export default function usersReducer(state = users, action) {
  switch (action.type) {
    case ADD_USER:
      let newUsers = state;
      newUsers.push(action.data);
      return newUsers
    default:
      return state
  }
}
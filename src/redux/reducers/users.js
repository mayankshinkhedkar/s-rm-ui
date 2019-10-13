import { ADD_USER } from '../constants'

let users = [
  {
    firstName: "Jon",
    lastName: "Von",
    email: "jon.von@mailinator.com",
    password: "jonvon",
    userType: "admin",
    policy: true,
  },
  {
    firstName: "Den",
    lastName: "Lio",
    email: "den.lio@mailinator.com",
    password: "denlio",
    userType: "admin",
    policy: true,
  },
  {
    firstName: "Ron",
    lastName: "Ken",
    email: "ron.ken@mailinator.com",
    password: "ronken",
    userType: "employee",
    policy: true,
  },
  {
    firstName: "Tom",
    lastName: "Dio",
    email: "tom.dio@mailinator.com",
    password: "tomdio",
    userType: "employee",
    policy: true,
  },
  {
    firstName: "Jerry",
    lastName: "Yen",
    email: "jerry.yen@mailinator.com",
    password: "jerryyen",
    userType: "employee",
    policy: true,
  },
]

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
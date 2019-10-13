let setUserSession = (data) => {
  localStorage.setItem("loggedInUser", JSON.stringify(data));
}

let unsetUserSession = () => {
  localStorage.removeItem("loggedInUser");
}

let getUserSession = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

export default {
  setUserSession,
  unsetUserSession,
  getUserSession
}
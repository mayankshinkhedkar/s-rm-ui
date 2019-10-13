let setUserSession = (data) => {
  sessionStorage.setItem("loggedInUser", JSON.stringify(data));
}

let unsetUserSession = () => {
  sessionStorage.removeItem("loggedInUser");
}

let getUserSession = () => {
  return JSON.parse(sessionStorage.getItem("loggedInUser"));
}

export default {
  setUserSession,
  unsetUserSession,
  getUserSession
}
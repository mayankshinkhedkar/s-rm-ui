let setUserSession = (data) => {
  sessionStorage.setItem("loggedInUser", JSON.stringify(data));
}

let unsetUserSession = () => {
  sessionStorage.removeItem("loggedInUser");
}

export default {
  setUserSession,
  unsetUserSession
}
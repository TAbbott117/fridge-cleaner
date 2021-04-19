const BASE_URL = "http://localhost:8000/fridge/"

const login = (userObject) => {
  return fetch(BASE_URL + "login/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = (token) => {
  return fetch(BASE_URL + 'current_user/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = (userObject) => {
  return fetch(BASE_URL + 'users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getUserFridge = (token) => {
  return fetch(BASE_URL + 'fridges/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

export { login, getLoggedInUser, signupUser, getUserFridge }
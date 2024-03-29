//import { authHeader } from "../Helpers";

const apiUrl = "https://cocaroapi.herokuapp.com";

export const userService = {
  login,
  logout,
  register
  //getById,
  //update,
  //delete: _delete
};

function login(name, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  };

  return fetch(`${apiUrl}/user/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

// function getById(id) {
//   const requestOptions = {
//     method: "GET",
//     headers: authHeader()
//   };

//   return fetch(`${apiUrl}/user/${id}`, requestOptions).then(handleResponse);
// }

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(`${apiUrl}/user/register`, requestOptions).then(handleResponse);
}

// function update(user) {
//   const requestOptions = {
//     method: "PUT",
//     headers: { ...authHeader(), "Content-Type": "application/json" },
//     body: JSON.stringify(user)
//   };

//   return fetch(`${apiUrl}/user/${user.id}`, requestOptions).then(
//     handleResponse
//   );
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   const requestOptions = {
//     method: "DELETE",
//     headers: authHeader()
//   };

//   return fetch(`${apiUrl}/user/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

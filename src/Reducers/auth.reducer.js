import { userConstants } from "../Constants";
import { userService } from "../Services";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { IsLoggedIn: true, user } : {};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        IsLoggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        IsLoggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      userService.logout();
      return {};
    default:
      return state;
  }
}

export default AuthReducer;

import { combineReducers } from "redux";
import Game from "./game.reducer";
import Alert from "./alert.reducer";
import Auth from "./auth.reducer";
import Register from "./register.reducer";

const rootReducer = combineReducers({
  Game,
  Alert,
  Auth,
  Register
});

export default rootReducer;

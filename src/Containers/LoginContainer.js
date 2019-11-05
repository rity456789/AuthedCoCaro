import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userActions } from "../Actions";
import LoginPage from "../Components/LoginPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    login: (name, password) => {
      dispatch(userActions.login(name, password));
    },
    logout: () => {
      dispatch(userActions.logout());
    }
  };
};

const LoginContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);

export default LoginContainer;

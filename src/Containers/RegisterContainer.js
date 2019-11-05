import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userActions } from "../Actions";

import RegisterPage from "../Components/RegisterPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    register: (name, password) => {
      dispatch(userActions.register({ name, password }));
      //window.location.assign('/login');
    }
  };
};

const RegisterContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterPage)
);

export default RegisterContainer;

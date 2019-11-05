import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { gameActions, userActions } from "../Actions";
import Game from "../Components/Game";
import { history } from "../Helpers";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onSquareClick: i => {
      dispatch(gameActions.selectSquare(i));
    },
    jumpTo: step => {
      dispatch(gameActions.goToMove(step));
    },
    handleSortToggle: () => {
      dispatch(gameActions.changeMovesOrder());
    },
    restart: () => {
      dispatch(gameActions.restartGame());
    },
    logout: () => {
      dispatch(userActions.logout());
      history.push("/login");
    }
  };
};

const GameContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Game)
);

export default GameContainer;

import { connect } from 'react-redux';
import { gameActions } from '../Actions/index';
import Game from '../Components/Game';

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
    }
  };
};

const CoCaro = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default CoCaro;

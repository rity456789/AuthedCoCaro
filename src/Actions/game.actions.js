import { gameConstants } from '../Constants';

// eslint-disable-next-line import/prefer-default-export
export const gameActions = {
  selectSquare,
  changeMovesOrder,
  goToMove,
  restartGame
};

function selectSquare(i) {
  return { type: gameConstants.SELECT_SQUARE, i };
}

function changeMovesOrder() {
  return { type: gameConstants.MOVES_ORDER };
}

function goToMove(step) {
  return { type: gameConstants.GO_TO_MOVE, step };
}

function restartGame() {
  return { type: gameConstants.RESTART_GAME };
}

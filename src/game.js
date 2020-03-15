const config = require('../src/config.js');
const logger = require('../src/logger.js').getLogger('game');
const ai = require('../src/ai.js');

const nicnacno = require('nicnacno');

let Game = new nicnacno('player', 'ai');
const get = () => {
  const {
    xPlayer: X,
    oPlayer: O,
    game: {
      result: team,
      board,
      _nextMove: nextMove,
    },
  } = Game;

  const winner = {
    X,
    O,
  }[team];

  const result = {
    [X]: 'X',
    [O]: 'O',
    board,
    nextMove,
  };

  if (!team)
    return result;

  result.end = true;
  if (team !== 'draw')
    Object.assign(result, {winner, team});

  return result;
};
const move = index => {
  logger.debug({index});
  return Game.game.applyMove(index);
};
let firstMove;
const nextGame = () => {
  let {oPlayer, xPlayer} = Game;
  [oPlayer, xPlayer] = [xPlayer, oPlayer];
  Game.reset();
  Object.assign(Game, {oPlayer, xPlayer});
  if (xPlayer === 'ai') {
    firstMove = Math.round(Math.random() * 8) + 1;
    Game.game.applyMove(firstMove);
  }
};
const reset = () => {
  const {xPlayer} = Game;
  Game.reset();
  if (xPlayer === 'ai') {
    Game.game.applyMove(firstMove);
  }
};

module.exports = {
  get,
  move,
  nextGame,
  reset,
};

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Game.scss';
import actions from '../../actions';

const Game = ({ game }) => {
    useEffect(() => {
        actions.fetchGame();
    }, []);

    return (
        <div className="game-container">
            {game ? (
                <>
                    <div>
                        {game.end ? (
                            game.winner === 'player'
                                ? `You won (as ${game.team})!`
                                : game.winner === 'ai'
                                    ? `AI won (as ${game.team})!`
                                    : 'Draw.'
                        ) : (
                            `You play as ${game.player}`
                        )}
                    </div>
                    <table className="game-board">
                        <tbody>
                            {game.board.map((row, rowNo) => (
                                <tr key={rowNo}>
                                    {row.map((cell, cellNo) => {
                                        const empty = typeof cell === 'number';

                                        return (
                                            <td
                                                key={cellNo}
                                                className={`game-cell ${empty && !game.end  ? 'game-cell-empty' : ''}`}
                                                onClick={empty && !game.end ? () => actions.setMove(cell) : undefined}
                                            >
                                                {empty ? '' : cell}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <button onClick={actions.requestNewGame}>New Game</button>
                        <button onClick={actions.requestGameReset}>Reset this game</button>
                    </div>
                </>
            ) : (
                <>
                    No game info.
                    <button onClick={actions.fetchGame}>Refetch</button>
                </>
            )}
        </div>
    );
};

export default connect((state) => ({
    game: state.game
}))(Game);

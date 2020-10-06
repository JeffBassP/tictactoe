import React, { useState } from 'react';
import { calculateWinner } from './../../helper';
import Board from './../Board/Board';

import './Game.css';

const Game = (players) => {

    const { player1, player2 } = players;
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    
    const xO = xIsNext ? 'X' : 'O';
    let Pl = xIsNext ? player1 : player2;

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        
        const squares = [...current];

        if (winner || squares[i]) return;

        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };
    const exitPage = () => {
        window.location.reload(false);
    }
    return (
        <div>
            <div className='game'>

                <Board squares={history[stepNumber]} onClick={handleClick} />
                <div className='info-wrapper'>

                    <h3>{winner ? `Winner: ${Pl = xIsNext ? player2 : player1} - ${winner}` : `'Next Player: ${Pl} - ${xO}`}
                    </h3>
                </div>

            </div>
            <div className='buttons-game'>
                <div className='btn-game' >Restart</div>
                <div className='btn-game' onClick={exitPage}>Exit</div>
            </div>
        </div>
    );
};

export default Game;

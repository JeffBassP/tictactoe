import React, { useState } from 'react';
import { calculateWinner } from './../../helper';
import Board from './../Board/Board';

import './Game.css';

const Game = (players) => {
    
    const {player1, player2} = players;
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? 'X' : 'O';
    const Pl = xIsNext ? player1 : player2;
    console.log(player1, player2);


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

    return (
        <div className='game'>
            
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className='info-wrapper'>

                <h3>{winner ? `Winner: ${winner}` : `'Next Player: ${Pl} ${xO}` }
                </h3>
            </div>

        </div>
    );
};

export default Game;

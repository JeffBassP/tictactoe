import React, { useState } from 'react';
import './Users.css'
import Game from './../Game/Game';

const CreateUsers = () => {

    const [start, setStart] = useState(false);
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');


    const startGame = () => {
        setStart(true)    
    }
    
    if (start === true) {
        return (<Game player1={player1} player2={player2}/>)
    }
    return (
        <div className='create-users'>
            <h1 className='title-players'>Please enter the Players name:</h1>
            <input type='text' placeholder='Player 1' value={player1} onChange={event => setPlayer1(event.target.value)} />
            <input type='text' placeholder='Player 2' value={player2} onChange={event => setPlayer2(event.target.value)} />
            <div className='buttons-start'>
                <div className='start-game' onClick={startGame}>Start</div>
                <div className='start-game'>Back</div>
            </div>
        </div>
    )

}

export default CreateUsers;
import React, { useState } from 'react';
import './App.css';
import CreateUsers from './components/Users/Users';


function App() {

  const [players, setPlayers] = useState(false);

  const showPlayers = () => {
    setPlayers(true); 

  };

  return (
    
    <div className="App">
    
      <div className='title'>
      <p>Ｔｉｃ　Ｔａｃ　Ｔｏｅ　ヌフぶ</p>
      </div>
      <div>
        {players ? <div></div> : <div className='button-start' onClick={showPlayers}>Start a new game</div>}
        {players ? <div></div> : <div className='button-start'>Exit</div>}
      </div>
      <div>
        {players ? <CreateUsers /> : <div></div>}
      </div>
    </div>

  );
}

export default App;

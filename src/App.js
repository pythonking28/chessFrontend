

import Board from './components/Board.js'
import PlayMenu from './components/PlayMenu.js'
import "./App.css";
import { useState } from 'react';

function App() {
  
const [boardReset, setBoardReset] = useState(false)



  return (
    <div className="flex items-center justify-center lg:justify-between gap-10 lg:gap-20 flex-col mt-10 lg:flex-row h-[80vh] ">
      <Board boardReset={boardReset} setBoardReset={setBoardReset} />
      <PlayMenu setBoardReset={setBoardReset} />
    </div>
  );
}

export default App;

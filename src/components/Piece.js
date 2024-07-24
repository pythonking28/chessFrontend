import {useState} from 'react'
const piece = ({color, type, square, setSourceSquare, win, draw}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchMove, setTouchMove] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  let loss = "";


  if(win === "w"){
    loss = "b"
  }else if(win === "b"){
    loss = "w"
  }else if(win === "d"){
    loss = "d"
  }else{
    loss = ""
  }



  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", square);
    setSourceSquare(square);
  };
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart(touch);
    setSourceSquare(square);
  };
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setTouchMove(touch);
  };
  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const square = getTargetSquareFromPosition(x, y);
    alert(square)
    setSourceSquare(square)
    e.dataTransfer.setData("text", square);
    

  };

  const getTargetSquareFromPosition = (x, y) => {
    const boardElement = document.getElementById('chess-board');
    const rect = boardElement.getBoundingClientRect();
    const squareSize = rect.width / 8; // assuming 8x8 grid
  
    const boardX = x - rect.left;
    const boardY = y - rect.top;
  
    const col = Math.floor(boardX / squareSize);
    const row = Math.floor(boardY / squareSize);
  
    return `${String.fromCharCode(97 + col)}${8 - row}`;

  };
  return (
    <div className="overflow-hidden"> 
      { type ?
       <div className={`transition-all duration-1000 relative ${type === "k" && color === loss ? "rotate-90 bg-red-600" : ""} ${type === "k" && color === win ? "bg-radial-golden " : ""} `} draggable={true} onDragStart={handleDragStart} onTouchStart={handleTouchStart}
       onTouchMove={handleTouchMove}
       onTouchEnd={handleTouchEnd}>

<img className={`w-10 h-10 md:w-14 md:h-14 xl:h-19 xl:w-19   `} src={`/images/${type + color}.png`? `/images/${type + color}.png`: null } alt=""  />
       </div>
      :
        null
      }
    </div>
  )
}
export default piece
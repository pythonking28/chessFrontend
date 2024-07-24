const piece = ({color, type, square, setSourceSquare, win, draw}) => {
  const [touchStart, setTouchStart] = useState(null);
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
    console.log(e.touches)
    e.dataTransfer.setData("text", square);
    setSourceSquare(square);
  };
  const handleTouchStart = (e) => {
    
    const touch = e.touches[0];
    setTouchStart(touch);
    setSourceSquare(square);
  };
  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const targetSquare = getTargetSquareFromPosition(touch.clientX, touch.clientY);
    if (targetSquare) {
      console.log(`Move from ${square} to ${targetSquare}`);
      setSourceSquare(null);
    }
  };
  return (
    <div className="overflow-hidden"> 
      { type ?
       <div className={`transition-all duration-1000 relative ${type === "k" && color === loss ? "rotate-90 bg-red-600" : ""} ${type === "k" && color === win ? "bg-radial-golden " : ""} `} draggable={true} onDragStart={handleDragStart} onTouchStart={handleTouchStart}
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
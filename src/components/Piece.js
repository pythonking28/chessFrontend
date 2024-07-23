const piece = ({color, type, square, setSourceSquare}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", square);
    setSourceSquare(square);
  };

  return (
    <div>
      { type ?
        <img className="w-10 h-10 md:w-14 md:h-14 xl:h-19 xl:w-19" src={`/images/${type + color}.png`? `/images/${type + color}.png`: null } alt="" draggable={true} onDragStart={handleDragStart} />
      :
        null
      }
    </div>
  )
}
export default piece
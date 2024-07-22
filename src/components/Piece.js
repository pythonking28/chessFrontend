const piece = ({color, type, square, setSourceSquare}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", square);
    setSourceSquare(square);
  };

  return (
    <div>
      <img src={`/images/${type + color}.png`} alt="" draggable={true} onDragStart={handleDragStart} />
    </div>
  )
}
export default piece
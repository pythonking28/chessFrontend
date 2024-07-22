import {useState, useRef} from 'react'
import { Chess } from "chess.js"
import Piece from './Piece'

const Board = () => {
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())
    const [sourceSquare, setSourceSquare] = useState(null);
    const [targetSquare, setTargetSquare] = useState(null);
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    // console.log(chess.ascii())

    const squareHandler = () => {

    }


    const handleDrop = (e, row, col) => {
        e.preventDefault();
        const targetSquare = alphabet[col] + (8 - row);
        setTargetSquare(targetSquare);
        console.log(`Move from ${sourceSquare} to ${targetSquare}`);
        // console.log(chess.turn())
    
        try {
            if (chess.move({ from: sourceSquare, to: targetSquare })) {
                chess.move('e5')
              setBoard(chess.board());
            }
        } catch (error) {
            console.error(error)
        }
      };

    const handleDragOver = (e) => {
        e.preventDefault();
      }

  return (
    <div>
        <div className="h-auto w-auto ml-20 grid grid-cols-8 grid-row-8 justify-items-center justify-center items-center">
            {board?.map((boardElements, row)=>(
                boardElements?.map((boardElement, col) => (
                    <div key={row+col} data-row={row} data-col={col} className={`h-20 w-20 ${(row+col)%2 === 0 ? "bg-[#739552]" : "bg-[#EBECD0]"}`}  onClick={squareHandler} onDrop={(e) => handleDrop(e, row, col)}
                    onDragOver={handleDragOver}> 
                        <Piece color={boardElement?.color} type={boardElement?.type} square={alphabet[col]+(8-row)} setSourceSquare={setSourceSquare} />
                    </div>
                ))
            ))}
        </div>
    </div>
  )
}
export default Board
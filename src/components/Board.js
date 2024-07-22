import {useState, useRef, useEffect} from 'react'
import socket from '../utils/Socket'
import { Chess } from "chess.js"
import Piece from './Piece'

const Board = () => {
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())
    const [sourceSquare, setSourceSquare] = useState(null);
    const [targetSquare, setTargetSquare] = useState(null);
    const [player, setPlayer] = useState('w')
    const alphabet = "abcdefghijklmnopqrstuvwxyz"



    const squareHandler = () => {

    }


    const handleDrop = (e, row, col) => {
        e.preventDefault();
        const targetSquare = alphabet[col] + (8 - row);
        setTargetSquare(targetSquare);
        console.log(`Move from ${sourceSquare} to ${targetSquare}`);

        if(sourceSquare === targetSquare) return
    
        try {
            socket.emit("move", {from: sourceSquare, to: targetSquare})

        } catch (error) {
            console.error(error)
        }
      };

      socket.on("sid",(message)=>{
        console.log(message)
        if(message === 'b'){
            
            setPlayer('b')
        }else{
            setPlayer('w')
        }
      })

      socket.on("move", (message)=>{
        console.log(message)
        setBoard(chess.board(chess.load(message)))
    })

    const handleDragOver = (e) => {
        e.preventDefault();
      }

  return (
    <div>
        <div className={`h-auto w-auto ml-20 grid grid-cols-8 grid-row-8 justify-items-center justify-center items-center ${player === 'b' ? "rotate-180" : "rotate-0"}`}>
            {board?.map((boardElements, row)=>(
                boardElements?.map((boardElement, col) => (
                    <div key={row+col} data-row={row} data-col={col} className={`h-20 w-20 ${(row+col)%2 === 0 ? "bg-[#739552]" : "bg-[#EBECD0]"} ${player === 'b' ? "rotate-180" : "rotate-0"}`}  onClick={squareHandler} onDrop={(e) => handleDrop(e, row, col)}
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
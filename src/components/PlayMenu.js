import { useState, useEffect } from "react"
import socket from '../utils/Socket'


const PlayMenu = ({setBoardReset}) => {
  const [connected, setConnected] = useState(false)


  useEffect(()=> {
    socket.on("connect",() => {
      console.log("Connected")
    })

    socket.on("disconnect", () => {
      console.log("disconnected");
      setConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("win")
    }
  },[])



  const handleConnect = () => {
    socket.connect();
    socket.emit("joinGame");
    setBoardReset(true)

    setConnected(true)
  }

  const handleDisconnect = () => {
    socket.disconnect();
    setBoardReset(false)
    setConnected(false)
    
  }

  socket.on("win", (message) => {
    console.log(message+" wins")
    
})

socket.on("draw",(message)=>{
  console.log(message) // TODO: set draw css
  setConnected(false)
})




  return (
    <div className="lg:mr-36 w-auto lg:w-[20%]">
    {connected ? 
    <button onClick={handleDisconnect} className="font-bold lg:font-extrabold text-lg lg:text-3xl bg-[#739552] text-white mx-2 my-1 px-2 py-1 lg:mx-4 lg:my-2 lg:px-4 lg:py-2 rounded-3xl w-fit shadow-2xl active:translate-y-1 transition-all ease-out">Quit Game</button>
      : 
    <button onClick={handleConnect} className="font-bold lg:font-extrabold text-lg lg:text-3xl bg-[#739552] text-white mx-2 my-1 px-2 py-1 lg:mx-4 lg:my-2 lg:px-4 lg:py-2 rounded-3xl w-fit shadow-2xl active:translate-y-1 transition-all ease-out">Play Game</button>
    }
    </div>
  )
}
export default PlayMenu
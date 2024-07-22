import { useEffect } from "react";
import { io } from "socket.io-client";

const PlayMenu = () => {



  const socket = io(process.env.REACT_APP_SOCKET)

  const handleConnect = () => {

    socket.on("connect",() => {
      console.log("Connect Hogaya")
    })

    socket.on("disconnect", () => {
      console.log("disconnect")
    })
  }

  socket.on("sid", (message) => {
    console.log(message)
  })

  return (
    <div className="mr-36">
      <button onClick={handleConnect} className="font-extrabold text-3xl bg-[#739552] text-white mx-4 my-2 px-4 py-2 rounded-3xl w-fit shadow-2xl active:translate-y-1 transition-all ease-out">Play Game</button>
    </div>
  )
}
export default PlayMenu
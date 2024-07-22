import socket from '../utils/Socket'

const PlayMenu = () => {

  const handleConnect = () => {

    socket.on("connect",() => {
      console.log("Connected")
    })
  }




  return (
    <div className="mr-36">
      <button onClick={handleConnect} className="font-extrabold text-3xl bg-[#739552] text-white mx-4 my-2 px-4 py-2 rounded-3xl w-fit shadow-2xl active:translate-y-1 transition-all ease-out">Play Game</button>
    </div>
  )
}
export default PlayMenu
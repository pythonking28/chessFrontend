import { io } from "socket.io-client";


const socket = io(process.env.REACT_APP_SOCKET,{
    autoConnect: true
})


export default socket;
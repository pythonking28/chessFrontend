import { io } from "socket.io-client";


const socket = io(process.env.REACT_APP_SOCKET,{
    transports: ["websocket"],
    path: "/socket.io",
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  })


export default socket;
import { io } from "socket.io-client";

export const socket = io("http://localhost:5000", {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  reconnectionDelay: 1000
});

// debug events
socket.on("connect_error", (err) => {
  console.error("socket connect_error:", err.message);
});
socket.on("reconnect_attempt", (n) => {
  console.log("socket reconnect attempt:", n);
});

import { useEffect } from "react";
import { socket } from "./utils/socket";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to backend via socket:", socket.id);
    });
    socket.on("connect_error", (err) => {
      console.error("Socket connect error:", err);
    });
    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
    };
  }, []);

  return <h1 style={{ color: "black" }}>Real-Time Collaboration Board</h1>;
}

export default App;

import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Chat() {
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setInputMsg(e.target.value);
  };

  const handleSend = () => {
    if (inputMsg.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputMsg]);
      setInputMsg("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className=" w-[70%] bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col h-screen">
        <div className="messages  h-[90%] overflow-y-auto px-2">
      <PerfectScrollbar>
          <ul>
            {messages.map((msg, index) => (
              <div className="bg-blue-400 w-fit mt-2 rounded-xl p-2">
                <li key={index}>{msg}</li>
              </div>
            ))}
          </ul>
      </PerfectScrollbar>
        </div>
      <div className="block">
        <div className="fixed bg-gray-950 bottom-0 flex items-center w-full p-2 ">
          <input
            className="outline-none rounded-full w-[60%] p-2 bg-slate-800 text-white pl-10"
            value={inputMsg}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 px-3 bg-blue-500 hover:bg-blue-800 text-white rounded-xl"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

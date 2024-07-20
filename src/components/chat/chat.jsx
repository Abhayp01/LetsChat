import React, { useState, useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Chat() {
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-[70%] bg-gradient-to-b from-gray-700 to-gray-900 flex flex-col h-screen">
      <div className="messages flex-1 overflow-y-auto p-4">
        <PerfectScrollbar>
          <ul className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className="flex justify-start">
                <div className="bg-blue-500 text-white w-fit max-w-xs break-words rounded-lg p-2">
                  <li>{msg}</li>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ul>
        </PerfectScrollbar>
      </div>
      <div className="p-2 bg-gray-800">
        <div className="flex items-center w-full p-2 rounded-lg ">
          <input
            className="flex-grow outline-none rounded-full p-2 bg-gray-600 text-white placeholder-gray-400 px-4"
            value={inputMsg}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

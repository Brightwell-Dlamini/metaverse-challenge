import Moralis from "react-moralis";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="w-11/12 flex fixed bottom-16 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="outline-none bg-transparent text-white placeholder-gray-500 flex-grow pr-5"
        type="text"
        placeholder={`Enter message ${user.getUsername()}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="font-bold text-pink-500"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;

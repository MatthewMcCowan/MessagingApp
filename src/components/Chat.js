import React, { useState, useEffect } from "react";
import db from "../firebase/firebase";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectChatName, selectChatId } from "../features/chatSlice";
import Message from "./Message";
import FlipMove from "react-flip-move";
import '../custom.css'

const Chat = () => {
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setInput("");
    console.log(input);
  };

  return (
    <div className=" md:flex-1 md:h-screen bg-red-100 flex flex-col">
      {/* header */}
      <div className="chat__header flex justify-between p-4 border bg-blue-100 h-32 items-center">
        <h4 className="text-2xl text-gray-500 font-bold">
          To: <span className="text-black tracking-wider uppercase">{chatName}</span>
        </h4>
        <strong className="text-xl">Details</strong>
      </div>
      {/* messages */}
      <div className="chat__messages  flex-1 mt-4 ml-4 overflow-scroll">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>
      {/* input */}
      <div className="chat__input border">
        <form className="flex items-center w-full justify-between p-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Space Message"
            className="text-md outline-none p-2 rounded-full flex-1"
          />
          <button
            onClick={sendMessage}
            className="bg-gray-400 p-2 rounded-lg h-full outline-none ml-2 hover:bg-blue-400 hover:text-white hidden"
          >
            Send Message
          </button>
          <button className="w-6 ml-4">
            <FontAwesomeIcon icon="microphone-alt" className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../firebase/firebase";
import moment from 'moment'

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  let date = new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString();
  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className="flex border-b-2 border-blue-300 p-2 items-center rounded-lg hover:bg-blue-400 cursor-pointer"
    >
      <FontAwesomeIcon
        icon="user-astronaut"
        className="bg-blue-200 text-blue-400 text-6xl rounded-lg p-2"
      />
      <div className="sidebarchat_info relative w-full ml-2 hover:text-white">
        <h3 className="text-2xl font-bold uppercase">{chatName} </h3>
        <p className='text-xl italic my-2'>{chatInfo[0]?.message}</p>
        <small className="absolute bottom-0 right-0 md:invisible xl:visible text-xs opacity-50">
          
          {!chatInfo[0] ? '' : moment(date).startOf('').fromNow()}  
        </small>
        <small className="text-xs opacity-50">
          {chatInfo[0]?.displayName} 
        </small>
      </div>
    </div>
  );
};

export default SidebarChat;

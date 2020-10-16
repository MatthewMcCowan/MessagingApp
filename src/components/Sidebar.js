import React, { useState, useEffect } from "react";
import SidebarChat from "./SidebarChat";
import "../custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "../firebase/firebase";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatName = prompt("Please enter a chat name!");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  return (
    <div className="flex flex-col h-screen border w-3/12 bg-blue-100">
      <div className="flex h-24  w-full items-center border-b-2 px-4 ">
        <img
          src={user.photo}
          alt=''
          className=" rounded-full cursor-pointer h-16 w-16 avatar"
          onClick={() => auth.signOut()}
        />
        <div className="sidebarSearchinput flex content-center p-2 rounded-lg bg-gray-300 ml-4 ">
          <FontAwesomeIcon
            icon="satellite"
            className="inline-block text-4xl pr-2 text-gray-600 border-r-4 border-dotted border-gray-700"
          />
          <input
            placeholder="Search"
            type="text"
            className="ml-4 h-full w-full text-gray-600 text-3xl bg-gray-300 outline-none cursor-pointer"
          />
        </div>
        <FontAwesomeIcon
          icon="edit"
          className="text-3xl text-gray-600 ml-4 cursor-pointer"
          onClick={addChat}
        />
      </div>
      <section className="mt-6 overflow-auto sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </section>
      {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
    </div>
  );
};

export default Sidebar;

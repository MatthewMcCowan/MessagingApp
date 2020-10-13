import React from "react";
import SidebarChat from "./SidebarChat";
import "../custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen border p-4 w-3/12">
      <div className="flex h-20  w-full items-center border-b-2 ">
        <FontAwesomeIcon
          icon="user-astronaut"
          className="bg-blue-200 text-blue-400 text-6xl rounded-full p-2 cursor-pointer"
        />
        <div className="sidebarSearchinput flex content-center p-2 rounded-lg bg-gray-300 ml-4 ">
          <FontAwesomeIcon
            icon="satellite"
            className="inline-block text-3xl text-gray-600"
          />
          <input
            placeholder="Search"
            type="text"
            className="ml-4 h-full w-full text-gray-600 text-3xl bg-gray-300 outline-none cursor-pointer"
          />
        </div>
        <FontAwesomeIcon icon="edit" className="text-3xl text-gray-600 ml-4 cursor-pointer" />
      </div>
      <section className="mt-6 overflow-auto sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </section>
      {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
    </div>
  );
};

export default Sidebar;

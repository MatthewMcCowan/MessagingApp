import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarChat = ({id, chatName}) => {
  return (
    <div className="flex border-b-2 p-2 h-32 items-center hover:bg-gray-200 rounded-lg hover:bg-blue-400 cursor-pointer">
      <FontAwesomeIcon
        icon="user-astronaut"
        className="bg-blue-200 text-blue-400 text-6xl rounded-full p-2"
      />
      <div className="sidebarchat_info relative w-full ml-2 md:visible invisible hover:text-white">
        <h3 className="text-2xl font-bold">{chatName}</h3>
        <p>last message sent ...</p>
        <small className="absolute top-0 right-0 xl:visible invisible">timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;

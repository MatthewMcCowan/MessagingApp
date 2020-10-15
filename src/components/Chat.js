import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice'

const Chat = () => {
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
    console.log(input);
  };

  return (
    <div className="p-4 w-9/12 h-screen bg-gray-200 flex flex-col">
      {/* header */}
      <div className="chat__header flex justify-between p-2 border">
        <h4 className="text-2xl text-gray-500 font-bold">
          To: <span className="text-black tracking-wider">Channel Name</span>
        </h4>
        <strong className='text-xl'>Details</strong>
      </div>
      {/* messages */} 
      <div className="chat__messages flex-1 border">
         <h2>I am a message</h2>
         <h2>I am a message</h2>
         <h2>I am a message</h2>
         <h2>I am a message</h2>
         <div>
        <img className="h-20 w-20" src={user.photo}/>
        </div>
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
          <button className='w-6 ml-4'>
            <FontAwesomeIcon icon="microphone-alt" className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;

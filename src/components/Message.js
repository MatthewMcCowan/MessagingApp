import React from "react";
import sketchArt from "../image/sketch-3045125_1920.jpg";

const Message = ({
  id,
  contents: { timestamp, displayName, email, message, uid, photo },
}) => {
  return (
    <div className="border-b-2 flex content-center mx-6 p-4 text-2xl relative w-auto">
      <img
        src={photo}
        alt=""
        className="w-16 h-16 rounded-full p-1 border-2 border-blue-600 bg-blue-300 mr-6"
      />
      <p className=" bg-gray-200 p-4 rounded-full w-auto">{message}</p>
      <small className="absolute bottom-0 right-0">
        {new Date(timestamp?.toDate()).toLocaleString()}
      </small>
    </div>
  );
};

export default Message;

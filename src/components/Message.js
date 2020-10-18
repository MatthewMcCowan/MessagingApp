import React, { forwardRef } from "react";
import sketchArt from "../image/sketch-3045125_1920.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import moment from "moment";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, uid, photo } },
    ref
  ) => {
    const user = useSelector(selectUser);
    let date = new Date(timestamp?.toDate()).toLocaleString();
    let isLoggedIn = user.email === email;
    return (
      <div
        ref={ref}
        className={`${
          isLoggedIn ? "justify-end" : "justify-start"
        } flex relative mx-4 p-6 inline-block `}
      >
        <img
          src={photo}
          alt=""
          className={`${
            isLoggedIn ? "order-last" : "order-1 "
          }  w-16 h-16 mr-6 rounded-lg`}
        />
        <p
          className={`${
            isLoggedIn ? "bg-blue-200 order-1" : "bg-gray-300 order-last"
          }   rounded-lg mr-6 relative text-xl pt-4 px-4 italic `}
        >
          {message}
          <small className="absolute bottom-0 right-0 text-xs opacity-50">
            {/* {new Date(timestamp?.toDate()).toLocaleString()} */}
            {moment(date).startOf("").fromNow()}
          </small>
        </p>
      </div>
    );
  }
);

export default Message;

<<<<<<< HEAD
import React, { useState } from "react";
import { Message } from "./Message";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
// import avatar4 from "./assets/avatar4.png";

const MessageContainer = () => {
  const userdetails = [
    {
      username: "John Doe",
      userimage: avatar1,
    },
    {
        username: "John Doe",
        userimage: avatar2,
      },
      {
        username: "John Doe",
        userimage: avatar3,
      }
  ];

  return (
    <div>
      <div className="message-container">
        <Message userimage={userdetails[0].userimage} username={userdetails[0].username} />
        <Message userimage={userdetails[1].userimage} username={userdetails[1].username} />
        <Message userimage={userdetails[2].userimage} username={userdetails[2].username} />
      </div>
    </div>
  );
};

export default MessageContainer;
=======
import React, {useState} from 'react'
import { Message } from './Message'

const MessageContainer = () => {


    return (
        <div>
            <div className="message-container">
                <Message />
                <Message />
            </div>
            
        </div>
    )
}

export default MessageContainer
>>>>>>> 3cf7fb3277323c5640c13fcb964a8c35821c0fb7

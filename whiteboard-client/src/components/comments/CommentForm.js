import React from 'react'
import vector from "./assets/vector.svg"

const CommentForm = () => {
<<<<<<< HEAD

    const handleSubmit =(e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} > 
                <div className="input-div"> 
                <input type="text" className="message-input" placeholder="Say Something" />
                <button className="sendbutton"><img alt="send" src={vector} className="sendmessage" /></button>
=======
    return (
        <div>
            <form>
                <div className="input-div"> 
                <input type="text" className="message-input" placeholder="Say Something" />
                <img alt="send" src={vector} className="sendmessage" />
>>>>>>> 3cf7fb3277323c5640c13fcb964a8c35821c0fb7
                </div>
            </form>
        </div>
    )
}

export default CommentForm

import React from 'react'
import vector from "./assets/vector.svg"

const CommentForm = () => {

    const handleSubmit =(e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} > 
                <div className="input-div"> 
                <input type="text" className="message-input" placeholder="Say Something" />
                <button className="sendbutton"><img alt="send" src={vector} className="sendmessage" /></button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm

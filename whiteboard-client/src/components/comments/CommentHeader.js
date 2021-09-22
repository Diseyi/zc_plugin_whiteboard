import React from 'react'
import closee from "./assets/closee.svg"


const CommentHeader = () => {
    return (
        <div>
            <div className="div-header-container">
            <div className="div-header">
                <h4 className="h4-header">Comments</h4>
                <img alt="close" src={closee} className="close-icon-header" />
            </div>
            </div>
        </div>
    )
}

export default CommentHeader

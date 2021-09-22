import React from 'react'
import './Comments.css'
import React from 'react'
import './Comments.css'
import CommentForm from './CommentForm'
import CommentHeader from './CommentHeader'
import MessageContainer from './MessageContainer'
import ViewMessage from './ViewMessage'

const CommentContainer = () => {

    
    return (
        <div>
            <div className="comment-container-div">
                <CommentHeader />
            <ViewMessage />
            <MessageContainer />
            <CommentForm />
            </div>
        </div>
    )
}

export default CommentContainer

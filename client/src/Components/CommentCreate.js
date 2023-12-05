import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CommentCreate = ({ blogId }) => {
  const [comment, setComment] = useState("");
  const addComment = async() => {
    await axios.post("http://localhost:4001/blogs/"+blogId+"/comments", {
        content: comment
    })
    setComment("");
  }  
  return (
    <div className="mt-4">
        <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="write comment" className="border-2 p-2 font-semibold text-xl rounded-md"/>
        <button className="p-2 m-2 font-semibold text-xl border-2 border-black rounded-md" onClick={addComment}>Add Comment</button>
    </div>
  )
}

export default CommentCreate
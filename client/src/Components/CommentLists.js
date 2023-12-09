import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CommentLists = ({ comments }) => {

    const renderedComments = Object.values(comments).map((comment) => {
        return <li key={comment.id} className="font-medium text-xl ml-20 list-disc">{comment.content}</li>
    })

  return (
    <div className="mt-3">
        <h1 className="text-xl font-semibold">Comments :</h1>
        <ul>
            {renderedComments}
        </ul>
    </div>
  )
}

export default CommentLists
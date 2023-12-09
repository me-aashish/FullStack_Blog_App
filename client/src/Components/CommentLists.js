import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CommentLists = ({ comments }) => {


    const renderedComments = Object.values(comments).map((comment) => {


        if(comment.status === "Approved"){
            return <li key={comment.id} className="font-medium text-xl ml-20 list-disc text-green-700">{comment.content}</li>
        }
        if(comment.status === "Rejected"){
            return <li key={comment.id} className="font-medium text-xl ml-20 list-disc text-red-700">Your comment rejected</li>
        }
        if(comment.status === "pending"){
            return <li key={comment.id} className="font-medium text-xl ml-20 list-disc text-yellow-500">Comment awaiting approval</li>
        }
        return;
        
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
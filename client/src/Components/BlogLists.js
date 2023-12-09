import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentLists from './CommentLists';

const BlogLists = () => {
    const [blogs, setBlogs] = useState({});
    const fetchBlogs = async() => {
        const res = await axios.get("http://localhost:4000/blogs");
        setBlogs(res.data);   
    }
    useEffect(() => {
        fetchBlogs();
    }, [])

    const renderedBlogs = Object.values(blogs).map((blog) => {
        return <div key={blog.id} className="ml-3" >
            <div className=" flex-wrap border-2 border-black w-auto inline-block m-2 p-2 font-bold text-3xl mt-4">
            {blog.title}
            <CommentLists blogId={blog.id} />
            <CommentCreate blogId={blog.id} />
            </div>
        </div>
    })

  return (
    <div className="flex flex-wrap mt-4">
        <div className="font-semibold text-4xl mx-[50%]">
            Blogs
        </div>
        {renderedBlogs}
    </div>
  )
}

export default BlogLists
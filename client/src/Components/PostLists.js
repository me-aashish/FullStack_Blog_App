import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostLists = () => {
    const [blogs, setBlogs] = useState({})
    const fetchBlogs = async() => {
        const res = await axios.get("http://localhost:4000/blogs");
        setBlogs(res.data);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])
    console.log(blogs);

    const renderedBlogs = Object.values(blogs).map((blog) => {
        return <div key={blog.id} className=" flex-wrap border-2 border-black w-auto inline-block m-2 p-2 font-bold text-3xl">
            {blog.title}
        </div>
    })

  return (
    <div className="flex flex-wrap">
        <div className="font-semibold text-4xl mx-[50%]">
            Blogs
        </div>
        {renderedBlogs}
    </div>
  )
}

export default PostLists
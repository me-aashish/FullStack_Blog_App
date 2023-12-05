import React from 'react'
import AddBlogs from './AddBlogs'
import BlogLists from './BlogLists'



const Body = () => {
  return (
    <div className = "">
        <h1 className="font-bold text-5xl mx-[46%] mt-2 w-full">Blog App</h1>
        <AddBlogs />
        <hr className="mt-5 border-2 border-black"/>
        <BlogLists className="mt-5"/>
    </div>
  )
}

export default Body
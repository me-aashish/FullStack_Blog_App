import axios from 'axios';
import React, { useState } from 'react'

const AddBlogs = () => {
  const [blogTitle, setBlogTitle] = useState(null);
  const handleAddBlogTitle = async(e) => {
    e.preventDefault();

    await axios.post("http://localhost:4000/blogs",{
      blogTitle
    });
    setBlogTitle(null);
  }
  return (
    <div className="mt-10 ml-[30rem]">
        <input type="text" placeholder="write blog title" className="w-[40rem] h-[51px] border-4 border-black rounded-lg p-2
        " onChange={e => setBlogTitle(e.target.value)} />
        <button className="h-[51px] p-2 ml-2 border-4 border-black rounded-lg font-semibold text-xl" onClick={e => handleAddBlogTitle(e)}>Add Title</button>
    </div>
  )
}

export default AddBlogs;
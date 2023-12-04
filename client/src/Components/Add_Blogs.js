import React, { useState } from 'react'

const Add_Blogs = () => {
  const [blogTitle, setBlogTitle] = useState(null);
  const handleAddBlogTitle = () => {
    console.log(blogTitle);
  }
  return (
    <div className="mt-10 ml-[30rem]">
        <input type="text" placeholder="write blog title" className="w-[40rem] h-[51px] border-4 border-black rounded-lg p-2
        " onChange={e => setBlogTitle(e.target.value)} />
        <button className="h-[51px] p-2 ml-2 border-4 border-black rounded-lg font-semibold text-xl" onClick={handleAddBlogTitle}>Add</button>
    </div>
  )
}

export default Add_Blogs
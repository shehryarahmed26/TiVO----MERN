import React, { useEffect, useState } from 'react'
import BlogCard from '../../Components/BlogCard/BlogCard'

const Blogs = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setloading] = useState(true)
    const GetBlogs = async () => {
        try {
        let blogsdata = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
        blogsdata = await blogsdata.json()
        setblogs(blogsdata.Blogs)
        setloading(false)
    }
    catch (err) {
        console.log('Error message >>', err)
        
    }
    
    
}
useEffect(() => {
    GetBlogs()
    
}, [])
console.log('Blogs Get Successfully', blogs)
  return (
    <div className='min-h-screen'>
        <h1 className='text-center my-10 text-4xl font-semibold'>Explore Blogs</h1>
        <div className="blogs flex justify-center gap-6 flex-wrap">
            { loading ? 
            <p>Loading...</p> :
                blogs.map((blog) => (
                    <BlogCard blog={blog}/>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs
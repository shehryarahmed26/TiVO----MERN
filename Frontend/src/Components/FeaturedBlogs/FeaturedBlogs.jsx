import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Blog_Card from '../Blogcard/Blog-Card';


const FeaturedBlogs = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setloading] = useState(true)
    const featuredblogs = async () => {
        try {
            let blogs = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
        blogs = await blogs.json()
        setblogs(blogs.Blogs.slice(0, 4))        
        setloading(false)
        }
        catch (err) {
            // console.log('Error >>', err);
            
        }
    }

    useEffect(() => {
        featuredblogs()
        console.log('Featured Blogs >>', blogs);


    }, [])

  return (
    <div>
        <h3 className='text-4xl text-center text-gray-900 my-10 font-semibold'>FeaturedBlogs</h3>
    {
        loading ? 
        <p>Loading...</p>
        : 
        <div className="featured-blogs flex items-center justify-center gap-6 flex-wrap px-10">
            {
                blogs.map((blog) => (
                    <Blog_Card blog={blog}/>
                ))
            }
        </div>

    }
    <div className="see-more-blogs flex items-center justify-center my-8">
    <button className=' px-4 rounded bg-black text-white py-2 flex items-center gap-2'>See More Blogs <FaArrowRight/></button>
    </div>
    </div>
  )
}

export default FeaturedBlogs
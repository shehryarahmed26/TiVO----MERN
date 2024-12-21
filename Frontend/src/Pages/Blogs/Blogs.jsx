import React, { useEffect, useState } from 'react'
import Blog_Card from '../../Components/Blogcard/Blog-Card'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Blogs = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setloading] = useState(true)
    window.scroll(0, 0)

    const GetBlogs = async () => {
        try {
        let blogsdata = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
        blogsdata = await blogsdata.json()
        setblogs(blogsdata.Blogs)
        setTimeout(() => {
        setloading(false)
        }, 1000);
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
    <div className='min-h-screen p-4'>
        <h1 className='text-center my-10 text-4xl font-semibold'>Explore Blogs</h1>
        <div className="blogs flex justify-center gap-6 flex-wrap">
            {
      
                blogs.map((blog) => (
                    loading ? 
                 <div className='w-[350px] sm:w-[45%] mx-auto'>
                    <p className='mb-4'><Skeleton width="100%" height={200}/></p>
                    <p className='mb-4'>
                    <Skeleton width="80%" height={20}/>

                    </p>
                    <Skeleton width="100%" height={15}/>
                    <Skeleton width="100%" height={15}/>
                    <div className="user flex gap-5 items-center">
                    <Skeleton width={40} height={40} borderRadius={100}/>
                    <Skeleton width={100} height={20} />
                      </div>
                 </div>  :
                    <Blog_Card blog={blog}/>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs
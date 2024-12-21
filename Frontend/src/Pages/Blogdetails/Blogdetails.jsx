import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Blogdetails = () => {
  const [blogdetails, setblogdetails] = useState({}) 
  const [relatedblogs, setrelatedblogs] = useState([]) 
  const [loading, setloading] = useState(true)
  const {id} = useParams()
  const handleblog = async () => {
    let blog = await fetch(`https://blogging-app-mern.vercel.app/api/blogs/details/${id}`)
    blog = await blog.json()    
    setblogdetails(blog.Blogs)
    console.log(blog);
    setloading(false)
  
  }
  const handlerelatedblogs = async () => {
    let blogs = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
    blogs = await blogs.json()
    setrelatedblogs(blogs.Blogs)

  } 
  useEffect(() => {
    window.scroll(0, 0)
    handleblog()
    handlerelatedblogs()
    // console.log(blogdetails);

    
  }, [id])
  return (
    <div className='px-10 py-4 flex flex-col sm:flex-row gap-12 w-full relative'>
      <div className='blog w-[300px] sm:w-[750px] flex flex-col '>
        {
          loading ?
          <p className='h-[200px]'><Skeleton  width="100%" height="100%" /></p>
           :
         <img className='sm:h-[400px] rounded' src={blogdetails?.blogimg} alt="" /> 
        }
        <div className="blogger-details flex items-center gap-2 p-4">
          {loading ?
           <p><Skeleton width={40} height={40} borderRadius={100}/></p>
            :
        <img className='w-10 h-10 rounded-full' src={blogdetails?.userimg} alt="" />

           }
        <h3>{loading ? <Skeleton width="50%" height={20}/> : blogdetails?.username   }</h3>
        </div>
        <h2 className='text-gray-900 text-2xl sm:text-4xl mb-4 font-bold'>{loading ? <Skeleton width="80%" height={25}/> : blogdetails?.title}</h2>
      <p className='text-gray-600'>{loading ? <Skeleton width="100%" height={15} count={4}/> : blogdetails?.description}</p>
      </div>
      <div className="related-blogs sm:min-w-[400px] sm:max-w-[400px]">
        <h3 className='text-gray-900 font-semibold text-3xl text-center mb-6'>Related Blogs</h3>
        <div className="blogs flex flex-col gap-8">
          {
            relatedblogs.map((blogobj) => (
              loading ?
              <div>
                <Skeleton width="100%" height={80}/>
              </div> 
              :
              <div>
                <Link to={`/blogdetail/${blogobj._id}`}>
                <img className='w-full rounded hover:shadow-md' src={blogobj.blogimg} alt="" />
                </Link>
                <Link to={`/blogdetail/${blogobj._id}`}>
                <h3 className='text-2xl font-bold text-gray-700 my-2 hover:text-blue-500 transition-all'>{blogobj.title}</h3>
                </Link>
                <p className='text-gray-500'>{blogobj.description.substring(0, 100)}...</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blogdetails
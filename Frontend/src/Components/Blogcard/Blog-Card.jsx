import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../context/authcontext";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Blog_Card = ({ blog }) => {
  console.log(blog);
  
  const [admin, setadmin] = useState(false)
  const {user} = useContext(Authcontext)
   const adminemail = import.meta.env.VITE_ADMIN_EMAIL
    const adminpassword = import.meta.env.VITE_ADMIN_PASS
    const deleteblog = async () => {
      const removeblog = await fetch(`https://blogging-app-mern.vercel.app/api/blogs/${blog._id}`,
          {method: "DELETE"}
      )
  }
    useEffect(() => {
      if (user?.email ===   adminemail && user?.password === adminpassword) {
        setadmin(true) 
      }
      else {
        setadmin(false)
      }
    }, [user])
 
  return (
    <div className="bg-white w-[100%] sm:w-[48%] mt-6  h-fit sm:h-fit shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      {/* Blog Banner Image */}
      {
        blog.blogimg ?
        <img
        src={blog.blogimg}
        alt={blog.title}
        className="w-full h-56 object-cover"
        /> :
        <Skeleton width={100} height={300}/>
      }

      {/* Blog Content */}
      <div className="p-6">
        {/* Blog Title */}
        <Link to={`/blogdetail/${blog._id}`}>
        <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-400 transition-all">
          {blog.title || <Skeleton width={400} height={50}/>}
        </h2>
        </Link>

        {/* Blog Description */}
        <p className="text-gray-600 mb-4">
          {blog.description.substring(0, 100) || <Skeleton count={10}/>}
        </p>
        <Link to={`/blogdetail/${blog._id}`}>
        <p className="text-end text-blue-500 cursor-pointer hover:text-blue-700 transition-all">Readmore...</p>
        </Link>

        {/* User Info */}
        <div className="flex items-center justify-between  mt-4">
          <div className="user flex items-center">
            {/* User Image */}
            {
              blog.userimg ?
              <img
              src={blog?.userimg }
              alt={blog.username}
              className="w-10 h-10 rounded-full object-cover border border-gray-300"
              /> :
              <Skeleton width={40} height={40}/>
            }

          {/* User Name */}
          <div className="ml-3">
            <span className="text-gray-800 font-medium">{blog.username || <Skeleton/>}</span>
          </div>
          </div>
          {
            admin &&
            <div className="accepe-reject flex items-center justify-end gap-2">
            <button onClick={deleteblog} className="text-red-600 border border-red-600 px-4 rounded" >Remove</button>
          </div>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Blog_Card;

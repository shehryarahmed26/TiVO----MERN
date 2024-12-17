import React from "react";
import { useNavigate } from "react-router-dom";

const PendingBlogCard = ({ blog, acceptblog, deleteblog }) => {
  const Navigate = useNavigate()
   
  return (
    <div className="bg-white w-[48%] mt-6  shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      {/* Blog Banner Image */}
      <img
        src={blog.blogimg}
        alt={blog.title}
        className="w-full h-48 object-contain"
      />

      {/* Blog Content */}
      <div className="p-6">
        {/* Blog Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {blog.title}
        </h2>

        {/* Blog Description */}
        <p className="text-gray-600 mb-4">
          {blog.description.length > 100
            ? `${blog.description.substring(0, 100)}...`
            : blog.description}
        </p>
        <p className="text-end text-blue-500 cursor-pointer hover:text-blue-700 transition-all">Readmore...</p>

        {/* User Info */}
        <div className="flex items-center justify-between  mt-4">
          <div className="user flex items-center">
            {/* User Image */}
          <img
            src={blog?.userimg}
            alt={blog.username}
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />

          {/* User Name */}
          <div className="ml-3">
            <span className="text-gray-800 font-medium">{blog.username}</span>
          </div>
          </div>
          <div className="accepe-reject flex items-center justify-center gap-2">
            <button onClick={acceptblog(blog)} className="text-green-600 border border-green-600 px-4 rounded">Accept</button>
            <button onClick={deleteblog(blog)} className="text-red-600 border border-red-600 px-4 rounded" >Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingBlogCard;

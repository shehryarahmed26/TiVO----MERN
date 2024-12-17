import React, { useEffect, useState } from "react";
import BlogCard from "../PendingBlogcard/PendingBlogCard";
import UserRow from "../Userrow/UserRow";
import PendingBlogCard from "../PendingBlogcard/PendingBlogCard";
import { useNavigate, useRevalidator } from "react-router-dom";

const PendingBlogs = () => {
  const [pendingblogs, setpendingblogs] = useState([]);
  const [loading, setloading] = useState(false)
  const Navigate = useNavigate()
  const acceptblog = async (blog) => {
    // setloading(true)
    const upload = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify JSON content
            },
            body: JSON.stringify(blog)
        })
        const removeblog = await fetch(`https://blogging-app-mern.vercel.app/api/pendingblogs/${blog._id}`,
            {method: "DELETE"}
          )
          Navigate('/admin')
}

const deleteblog = async (blog) => {
    // setloading(true)
    const removeblog = await fetch(`https://blogging-app-mern.vercel.app/api/pendingblogs/${blog._id}`,
        {method: "DELETE"}
    )
    getblogs()

    // setloading(false)
}

  const getblogs = async () => {
    try {
        setloading(true)
      let blogs = await fetch(
        `https://blogging-app-mern.vercel.app/api/pendingblogs`
      );
      blogs = await blogs.json();
      setpendingblogs(blogs.Blogs);
      setloading(false)
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
      getblogs();
    }, []);
    console.log("pending Blogs >>", pendingblogs);

  return (
    <div className="flex flex-wrap items-center justify-between ">
     { loading ? 
     <h1>Loading...</h1> :
        pendingblogs.map((blog) => (
            <PendingBlogCard blog={blog} acceptblog={acceptblog} deleteblog={deleteblog}/>
        ))
     }
    </div>
  );
};

export default PendingBlogs;

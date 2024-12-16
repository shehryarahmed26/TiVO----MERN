import React, { useEffect, useState } from "react";
import BlogCard from "../PendingBlogcard/PendingBlogCard";
import UserRow from "../Userrow/UserRow";
import PendingBlogCard from "../PendingBlogcard/PendingBlogCard";

const PendingBlogs = () => {
  const [pendingblogs, setpendingblogs] = useState([]);
  const [loading, setloading] = useState(false)

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
            <PendingBlogCard blog={blog}/>
        ))
     }
    </div>
  );
};

export default PendingBlogs;

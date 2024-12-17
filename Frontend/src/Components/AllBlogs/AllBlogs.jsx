import React, { useEffect, useState } from "react";
import PendingBlogCard from "../PendingBlogcard/PendingBlogCard";

const AllBlologs = () => {
  const [allblogs, setallblogs] = useState([]);
  const [loading, setloading] = useState(false)

  const getblogs = async () => {
    try {
        setloading(true)
      let blogs = await fetch(
        `https://blogging-app-mern.vercel.app/api/blogs`
      );
      blogs = await blogs.json();
      setallblogs(blogs.Blogs);
      setloading(false)
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
      getblogs();
    }, []);
    console.log("All Blogs >>", allblogs);

  return (
    <div className="flex flex-wrap items-center justify-between ">
     { loading ? 
     <h1>Loading...</h1> :
     allblogs.map((blog) => (
      
            < PendingBlogCard blog={blog}/>
        ))
     }
    </div>
  );
};

export default AllBlologs;

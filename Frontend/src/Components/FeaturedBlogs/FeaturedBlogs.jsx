import React, { useEffect } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Blog_Card from "../Blogcard/Blog-Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(true);
  const featuredblogs = async () => {
    try {
      let blogs = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`);
      blogs = await blogs.json();
      setblogs(blogs.Blogs.slice(0, 4));
      setloading(false);
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  useEffect(() => {
    featuredblogs();
    console.log("Featured Blogs >>", blogs);
  }, []);

  return (
    <div>
      <h3 className="text-4xl text-center text-gray-900 my-10 font-semibold">
        FeaturedBlogs
      </h3>

      <div className="featured-blogs flex items-center justify-center gap-6 flex-wrap px-5 sm:px-10">
        {blogs.map((blog) =>
          loading ? (
            <div className="w-[350px] sm:w-[45%] mx-auto">
              <p className="mb-4">
                <Skeleton width="100%" height={200} />
              </p>
              <p className="mb-4">
                <Skeleton width="80%" height={20} />
              </p>
              <Skeleton width="100%" height={15} />
              <Skeleton width="100%" height={15} />
              <div className="user flex gap-5 items-center">
                <Skeleton width={40} height={40} borderRadius={100} />
                <Skeleton width={100} height={20} />
              </div>
            </div>
          ) : (
            <Blog_Card blog={blog} />
          )
        )}
      </div>

      <div className="see-more-blogs flex items-center justify-center my-8">
        <Link to={'/blogs'}>
        <button className=" px-4 rounded bg-black text-white py-2 flex items-center gap-2">
          See More Blogs <FaArrowRight />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

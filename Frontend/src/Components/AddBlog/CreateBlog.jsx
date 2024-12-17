import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../context/authcontext";
import { useNavigate } from "react-router-dom";
import BlogPopup from "../Blogpopup/Blogpopup";

const CreateBlog = () => {
  const {user} = useContext(Authcontext)
  const [loading, setloading] = useState(false)
  // console.log(user);
  
  const [blog, setBlog] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [author, setauthor] = useState('')
  const [previewImg, setPreviewImg] = useState("");
  const [blogimg, setblogimg] = useState('')
  const [popup, setpopup] = useState(false)
  const Navigate = useNavigate()

  // Handle Input Changes
  const uploadblog = async () => {
    let url = await fetch(`https://blogging-app-mern.vercel.app/api/pendingblogs`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content
      },
      body: JSON.stringify(blog)
      }
    )
    url = await url.json()
    console.log('Blog Added in DB >>', url);
    setBlog('')
    setauthor('')
    setblogimg('')
    settitle('')
    setdescription('')
    setPreviewImg('')
    setpopup(true)
    
  } 
  // without login cant reached this page >>

  useEffect(() => {
    if (!user) {
      Navigate('/auth/login')
    }
  }, [user])

  // upload blog to pending blogs >> 
  useEffect(() => {
    if (blog) {
      uploadblog();

      
    }
  }, [blog])
 
  // Handle Blog Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setPreviewImg(reader.result);
        const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "Blogsapp" )
    data.append("api_key", "689265731956763" )
    setloading(true)
        let upload = await fetch(`https://api.cloudinary.com/v1_1/dt3ekhfch/upload`,{
          method: 'POST',
          body: data
        })
        upload = await upload.json()
          setblogimg(upload?.url)
          console.log('blogimg >>', blogimg);
          setloading(false)

      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Publish
  const handlePublish = async ()  => {
    if (title, description, author, blogimg) {
      setBlog({title, description, author, blogimg, username: user.username, userimg: user.userimg})
    }
    else {
      alert("Please fill all fields!");
    }
    // console.log('A complete blog >>', blog);
    // const db = await blog
    // console.log('Blog', blog);
    

    // setPreviewImg("")
    // setBlog('')
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {
        loading ? 
        <h2>Loading...</h2> :

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
      
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Create a New Blog</h2>

        {/* Blog Image Upload */}
        <div className="mb-6">
          <label htmlFor="blogImg" className="block text-sm font-medium text-gray-600 mb-2">
            Blog Image
          </label>
          <div className="relative w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center bg-gray-50">
            {previewImg ? (
              <img
                src={previewImg}
                alt="Blog"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <p className="text-gray-400">Click to upload blog image</p>
            )}
            <input
              id="blogImg"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Title</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={(e) => settitle(e.target.value) }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 resize-none"
            rows="4"
            placeholder="Enter blog description"
          ></textarea>
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter author name"
          />
        </div>

        {/* Publish Button */}
        <button
          onClick={handlePublish}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Publish Blog
        </button>
        <BlogPopup isOpen={popup} onClose={() => Navigate('/')}/>
      </div>
      }
    </div>
  );
};

export default CreateBlog;

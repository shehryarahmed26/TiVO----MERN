import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registar = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [userimg, setuserimg] = useState('');
  const [loader, setloader] = useState(false);
  const [error, seterror] = useState(false)
  const Navigate = useNavigate();

  const handlerform = async () => {
    const userobj = {
      username,
      email,
      password,
      userimg,
    };
    if (username, email, password, userimg) {
      let url = await fetch(`https://blogging-app-mern.vercel.app/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON content
        },
        body: JSON.stringify(userobj),
      });
      url = await url.json();
      console.log('User', url);
      Navigate('/auth/login');
    }
    else {
      seterror(true)
      alert('something wrong')
    }
  };

  const handleupload = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Blogsapp');
    data.append('api_key', '689265731956763');
    setloader(true);
    let upload = await fetch(`https://api.cloudinary.com/v1_1/dt3ekhfch/upload`, {
      method: 'POST',
      body: data,
    });
    upload = await upload.json();
    if (upload) {
      setuserimg(upload?.url);
      console.log('Userimg >>', userimg);
    }
    console.log(upload);
    setTimeout(() => {
      setloader(false);
    }, 2000);
  };

  return (
    <div className="flex sm:items-center justify-center  pt-5 pb-5 min-h-screen sm:bg-gray-100">
      <div className="w-full max-w-md bg-white  rounded-lg shadow-lg p-6">
      <img src="/Images/logo2.png" className="w-[500px] h-[100px] object-cover  mx-auto" alt="" />
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <div className="flex flex-col gap-4">
          <label htmlFor="#">
            <p className="mb-2 text-sm font-medium text-gray-600">Username</p>
            <input
              onChange={(e) => setusername(e.target.value)}
              className="border border-gray-300 w-full rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="text"
              placeholder="Enter your username"
            />
          </label>
          <label htmlFor="#">
            <p className="mb-2 text-sm font-medium text-gray-600">Email</p>
            <input
              onChange={(e) => setemail(e.target.value)}
              className="border border-gray-300 w-full rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </label>
          <label htmlFor="#">
            <p className="mb-2 text-sm font-medium text-gray-600">Password</p>
            <input
              onChange={(e) => setpassword(e.target.value)}
              className="border border-gray-300 w-full rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <label htmlFor="#">
            <p className="mb-2 text-sm font-medium text-gray-600">Profile Image</p>
            <input
              onChange={handleupload}
              className="border border-gray-300 w-full rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="file"
            />
          </label>
          {loader ? (
            <p className="text-center text-blue-600">Uploading...</p>
          ) : (
            <button
              onClick={handlerform}
              className="bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Register
            </button>
          )}
          {error && <p className='text-red-600 text-center'>Please fill all the details !</p>}
        </div>
        <div className="flex justify-center gap-1 mt-4 text-sm text-gray-600">
          <p>Already have an account?</p>
          <Link to={'/auth/login'}>
            <span className="text-blue-500 hover:underline">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registar;

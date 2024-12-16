import React, { useState, useEffect, useContext } from "react";
import { Authcontext } from "../../context/authcontext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {
  const user = useContext(Authcontext)
  const Navigate = useNavigate()
  useEffect(() => {
    if (!user.user) {
      Navigate('/auth/login')
    }
  }, [user])
  
  // console.log(user.user);
  
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   profilePic: "",
  // });

  // const [previewImg, setPreviewImg] = useState("");

  // Load user data from localStorage
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user")) || {
  //     username: "Nasir Ahmed",
  //     email: "nasir@example.com",
  //     profilePic: "",
  //   };
  //   setUser(storedUser);
  //   setPreviewImg(storedUser.profilePic || "https://via.placeholder.com/150");
  // }, []);

  // Handle username change
  // const handleUsernameChange = (e) => {
  //   setUser({ ...user, username: e.target.value });
  // };

  // Handle profile picture change
  // const handleProfilePicChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreviewImg(reader.result);
  //       setUser({ ...user, profilePic: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // Handle logout
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setUser(null);
  //   window.location.href = "/login";
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white relative shadow-lg rounded-lg p-6 w-full max-w-sm">
        <Link to={'/'}>
        <p className="absolute top-4 left-4 flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-all"><FaArrowLeftLong/> Back</p>
        </Link>
        {/* Profile Picture */}
        <div className="relative w-24 h-24 mx-auto">
          <label htmlFor="profilePicInput">
            <img
              src={user.user.userimg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full cursor-pointer border-4 border-blue-500"
            />
          </label>
          <input
            id="profilePicInput"
            type="file"
            accept="image/*"
            className="hidden"
            // onChange={handleProfilePicChange}
          />
        </div>

        {/* Inputs Section */}
        <div className="mt-6">
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              value={user.user.username}
              // onChange={handleUsernameChange}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input (Disabled) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={user.user.email}
              disabled
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg cursor-not-allowed"
              placeholder="Your email"
            />
          </div>
        </div>

        {/* Logout Button */}
        <button
          // onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

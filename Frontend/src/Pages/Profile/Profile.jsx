import React, { useEffect, useContext } from "react";
import { Authcontext } from "../../context/authcontext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useContext(Authcontext);
  const Navigate = useNavigate();
  window.scroll(0, 0)

  useEffect(() => {
    if (!user.user) {
      Navigate("/auth/login");
    }
  }, [user]);

  return (
    <div className="flex justify-center  mt-16 sm:mt-0 sm:items-center min-h-screen sm:bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="bg-white relative sm:shadow-lg rounded-lg p-8 w-full max-w-sm">
        <Link to="/">
          <p className="absolute top-4 left-4 flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-all">
            <FaArrowLeftLong /> Back
          </p>
        </Link>
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user.user.userimg || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-md"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-800">
            {user.user.username}
          </h1>
          <p className="text-gray-500">{user.user.email}</p>
        </div>

        {/* User Info */}
        <div className="mt-6">
          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              disabled={true}
              value={user.user.username}
              readOnly
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 cursor-not-allowed"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
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
          onClick={() => {
            user.logout(); // Assuming you have a logout function in your context
            Navigate("/auth/login");
          }}
          className="w-full mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

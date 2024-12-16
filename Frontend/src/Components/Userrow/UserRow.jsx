import React from "react";

const UserRow = ({ user, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg hover:bg-gray-50 transition">
      {/* User Image */}
      <img
        src={user.userimg}
        alt={`${user.name}'s avatar`}
        className="w-12 h-12 rounded-full object-cover border border-gray-300"
      />

      {/* User Name and Email */}
      <div className="flex flex-col ml-4 flex-1">
        <span className="font-medium text-gray-800 text-lg">{user.name}</span>
        <span className="text-sm text-gray-500">{user.email}</span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(user.id)}
        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        aria-label="Delete user"
      >
        🗑️
      </button>
    </div>
  );
};

export default UserRow;

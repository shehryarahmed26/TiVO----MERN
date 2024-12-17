import React, { useState } from "react";

const BlogPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800">Blog Submission Pending</h2>
        <p className="text-gray-600 mt-4">
          Your blog is currently <span className="font-medium">under review</span>. It will be reviewed by our team within <span className="font-medium">24 to 48 hours</span>.
          Once approved, it will be published.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default BlogPopup
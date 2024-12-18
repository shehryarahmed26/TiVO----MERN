import React from 'react';

const Features = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Discover Amazing Features</h2>
        <p className="mt-4 text-gray-600">
          Unlock the full potential of blogging with our powerful features.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-blue-500 text-4xl mb-4">
            📝
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Easy Blog Publishing</h3>
          <p className="text-sm text-gray-600 mt-2">
            Create and publish blogs effortlessly with our intuitive platform.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-green-500 text-4xl mb-4">
            👤
          </div>
          <h3 className="text-lg font-semibold text-gray-800">User Profiles</h3>
          <p className="text-sm text-gray-600 mt-2">
            Build your profile to showcase your blogs and connect with others.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-purple-500 text-4xl mb-4">
            📂
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Saved Drafts</h3>
          <p className="text-sm text-gray-600 mt-2">
            Save your blogs as drafts and publish them when you’re ready.
          </p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-yellow-500 text-4xl mb-4">
            🗂️
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Categories Management</h3>
          <p className="text-sm text-gray-600 mt-2">
            Organize blogs into categories for better discoverability.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Explore Categories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["Sports", "Entertainment", "Technology", "Lifestyle", "Education", "Travel"].map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center hover:bg-blue-100 transition-colors duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Blogs related to {category}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Marquee */}
      <div className="bg-black py-4 overflow-hidden mx-11">
        <div className="whitespace-nowrap animate-marquee">
          {['Sports', 'Technology', 'Travel', 'Lifestyle', 'Education', 'Entertainment', 'Fooding', 'Medical', 'Fun', 'Knowledge', 'Business'].map((category, index) => (
            <span key={index} className="text-white text-lg mx-8">
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 bg-blue-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Your Blogging Journey?</h2>
        <p className="mt-4">Join our platform and share your ideas with the world!</p>
        <button className="mt-6 bg-white text-blue-500 py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Features;

// Tailwind CSS animation (add this to your global CSS file)


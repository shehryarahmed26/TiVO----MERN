import React, { useContext, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Authcontext } from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  window.scroll(0, 0)

  
  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-white text-gray-800">
        <div className="container mx-auto px-6 py-16 md:py-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4 transform transition duration-500 ease-in-out hover:scale-105 hover:text-blue-800">
              Features
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover the powerful web development features we offer, built to ensure your website is fast, secure, and responsive across all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v4m0 0L8 6m4 0l4 4m-4-4v16m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Our websites are designed to be fully responsive, ensuring they look great on all screen sizes from mobile to desktop.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-6 9 6V3H3v6zm0 12h18v-6l-9 6-9-6v6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Optimization</h3>
              <p className="text-gray-600">
                We optimize websites for performance, ensuring fast loading times, smooth user experiences, and minimal bounce rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a9 9 0 00-9 9v6a9 9 0 0018 0V11a9 9 0 00-9-9zM12 3a7 7 0 017 7v6a7 7 0 01-14 0V10a7 7 0 017-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Features</h3>
              <p className="text-gray-600">
                We integrate robust security measures to protect your website from cyber threats, ensuring your users' data is safe and secure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 12l9-9 9 9-9 9-9-9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cross-Browser Compatibility</h3>
              <p className="text-gray-600">
                Our websites are tested and optimized to work seamlessly across all major browsers, including Chrome, Firefox, Safari, and Edge.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4l2 2 2-2m-2 2v12m0 0l-2-2m2 2l2 2M6 12h12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                We implement SEO best practices to ensure your website ranks well in search engine results, increasing visibility and organic traffic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
              <div className="flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3V2a7 7 0 017 7v5h2a1 1 0 011 1v6a1 1 0 01-1 1h-2v5a7 7 0 01-7 7h-1a7 7 0 01-7-7v-5H4a1 1 0 01-1-1v-6a1 1 0 011-1h2V7a7 7 0 017-7h1a7 7 0 017 7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Modern Web Technologies</h3>
              <p className="text-gray-600">
                We use the latest web technologies, including HTML5, CSS3, JavaScript frameworks, and responsive frameworks to build cutting-edge websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
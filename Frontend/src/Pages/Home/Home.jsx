import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Herosection from '../../Components/HeroSection/Herosection'
import Testinomials from '../../Components/Testinomials/Testinomials'
import Categories from '../../Components/Categories/Categories'
import FeaturedBlogs from '../../Components/FeaturedBlogs/FeaturedBlogs'

const Home = () => {
  window.scroll(0, 0)
 
    
  return (
    <div>
        {/* <Navbar/> */}
        <Herosection/>
        <Categories/>
        <FeaturedBlogs/>
        <Testinomials/>
        <div className="mt-16 bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Your Blogging Journey?</h2>
        <p className="mt-4 px-10 sm:px-0">Join our platform and share your ideas with the world!</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600 transition-all duration-300">
          Get Started
        </button>
      </div>
        

    </div>
  )
}

export default Home
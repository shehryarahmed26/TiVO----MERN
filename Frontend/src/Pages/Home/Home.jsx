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

    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex px-10 justify-between items-center py-4 border-gray-300 border-b'>
      <div className="right flex items-center gap-10">
        <Link to='/' className='font-bold text-3xl'>Logo.</Link>
        <div className="links flex gap-10 justify-center">
          <Link className='text-lg' to='/Feautures'>Features</Link>
          <Link className='text-lg' to='/Blogs'>Blogs</Link>
          <Link className='text-lg' to='/Aboutus'>About Us</Link>
        </div>
      </div>

      <div className="auth flex gap-5">
        <Link to={'/auth/signup'}>
          <p className='bg-blue-500 text-white px-4 py-1 rounded'>Signup</p>
        </Link>
        <Link to={'/auth/login'}>
          <p className='bg-black text-white px-4 py-1 rounded'>Login</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
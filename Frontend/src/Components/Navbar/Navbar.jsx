import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex px-10 justify-between items-center py-4 '>
      <div className="right flex items-center gap-10">
        <h2 className='font-bold text-3xl'>Logo.</h2>
        <div className="links flex gap-10 justify-center">
            <a className='text-lg' href="3">Features</a>
            <a className='text-lg' href="3">Blogs</a>
            <a className='text-lg' href="3">Aboutus</a>
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
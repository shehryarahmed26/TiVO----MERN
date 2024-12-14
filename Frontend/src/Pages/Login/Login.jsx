import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-5xl mb-8 font-bold text-center'>Login</h2>
      <form className='flex flex-col gap-4 w-[350px]' action="">
        
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Email</p>
          <input className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Password</p>
          <input className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <input className='bg-blue-700 py-1 rounded text-white ' type="submit" />
      </form>
      <div className="login-link flex gap-1 mt-2">
      <p>Dont Have an Account ? </p> 
      <Link to={'/auth/signup'}>
      <a className='hover:text-blue-700 transition-all' href="#">Signup</a>
      </Link>
      </div>
    </div>
  )
}

export default Login
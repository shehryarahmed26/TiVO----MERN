import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../context/authcontext'

const Login = () => {
  const {setuser} = useContext(Authcontext)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loginerror, setloginerror] = useState(false)
  const handlelogin = async () => {
    if (email, password) {

      const user = {email, password}
      let auth = await fetch(`https://blogging-app-mern.vercel.app/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', // Specify JSON content
        },
        body: JSON.stringify(user)
      }) 
      auth = await auth.json()
      if (auth.auth) {
        // setuser()
        setloginerror(false)
      }
      else {
        setloginerror(true)
      }
      console.log('Authentication >>', auth);
    }
    else {
      console.log('bc phele form to fill kr');
      
    }
      
    
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-5xl mb-8 font-bold text-center'>Login</h2>
      <div className='flex flex-col gap-4 w-[350px]'>
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Email</p>
          <input onChange={(e) => setemail(e.target.value)} className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Password</p>
          <input onChange={(e) => setpassword(e.target.value)} className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <button onClick={handlelogin} className='bg-blue-700 py-1 rounded text-white '>Login</button>
      </div>
        <p className='text-red-700 text-center my-2'>{loginerror && 'Invalid Email or password'}</p>
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
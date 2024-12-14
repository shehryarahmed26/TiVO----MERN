import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registar = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userimg, setuserimg] = useState('')
  const [loader, setloader] = useState(false)
  const handlerform =  async ()  => { 
    
    const userobj =  {
      username,
      email,
      password,
      userimg
    }
    // const adduser = await fetch(``)

  // console.log(userobj);
    
    // console.log('userobject>>', userobj);
    
  }
  const handleupload = async (event) => {
    const file = event.target.files[0]
    // console.log(file);
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "Blogsapp" )
    data.append("api_key", "689265731956763" )
    setloader(true)
    let upload = await fetch(`https://api.cloudinary.com/v1_1/dt3ekhfch/upload`,{
      method: 'POST',
      body: data
    })
    upload = await upload.json()
    if (upload) {
      setuserimg(upload?.url)
      console.log('Userimg >>', userimg);
    } 
    
    console.log(upload);
    setloader(false)

     
    
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-5xl mb-8 font-bold text-center'>Signup</h2>
     
        {/* <h1>Loading..</h1>  */}
      <div className='flex flex-col gap-4 w-[350px]'>
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Username</p>
          <input onChange={(e) => setusername(e.target.value)} className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Email</p>
          <input onChange={(e) => setemail(e.target.value)} className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <label htmlFor="#">
          <p className='mb-2 text-lg'>Password</p>
          <input onChange={(e) => setpassword(e.target.value)} className='border border-gray-500 w-full rounded py-1 hover:border-black outline-none focus:border-black' type="text" />
        </label>
        <input onChange={handleupload} type="file" />
        {/* <input onClick={handlerform} className='bg-blue-700 py-1 rounded text-white ' /> */}
        {loader ?
         <p className='bg-blue-700 py-1 rounded text-white text-center'>Uploading...</p> :
        <button onClick={handlerform} className='bg-blue-700 py-1 rounded text-white '>Submit</button>

        }
      </div>
  
      <div className="login-link flex gap-1 mt-2">
      <p>Have an Account ? </p> 
      <Link to={'/auth/login'}>
      <a className='hover:text-blue-700 transition-all' href="#"> Login</a>
      </Link>
      </div>
    </div>
  )
}

export default Registar
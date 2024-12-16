import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../context/authcontext'
import { IoMdArrowDropdown, IoIosCreate, IoIosLogOut  } from "react-icons/io";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";




const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  const  {user, setuser} = useContext(Authcontext)
  console.log('usecontext done', user);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setuser(null);
    settoggle(false)
  };
  
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
  { user ? 
    <div className='flex items-center justify-center gap-2'>
      <img className='w-[40px] h-[40px] rounded-full' src={user.userimg} alt="" />
      <p>{user.username}</p>
      <p onClick={() => settoggle(!toggle)}>< IoMdArrowDropdown /></p>

    </div> :
       <div className="auth flex gap-5">
        <Link to={'/auth/signup'}>
          <p className='bg-blue-500 text-white px-4 py-1 rounded'>Signup</p>
        </Link>
        <Link to={'/auth/login'}>
          <p className='bg-black text-white px-4 py-1 rounded'>Login</p>
        </Link>
      </div>
      }
      { toggle &&
      <div className="info-toggle flex flex-col w-[150px] gap-2 absolute top-16 right-10 py-2 bg-white  shadow-sm shadow-gray-300">
        <Link to={'/user/profile'}>
        <p className='flex items-center gap-2 hover:bg-gray-200 w-full cursor-pointer px-4'><FaRegUser/>Profile</p>
        </Link>
        <Link to={'/addblog'}>
        <p className='flex items-center gap-2 hover:bg-gray-200 w-full cursor-pointer px-4'> <IoCreateOutline />Create Blog</p>
        </Link>
        <p onClick={handleLogout} className='flex items-center gap-2 hover:bg-black hover:text-white w-full cursor-pointer px-4'><IoIosLogOut/> Logout</p>
      </div> 
      }
    </nav>
  )
}

export default Navbar
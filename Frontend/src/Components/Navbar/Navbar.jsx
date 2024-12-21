import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../../context/authcontext'
import { IoMdArrowDropdown, IoIosCreate, IoIosLogOut  } from "react-icons/io";
import { FaRegUser, FaUser } from "react-icons/fa";
import { IoCreateOutline, IoDesktop } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { CiCircleInfo, CiLocationArrow1, CiLogout, CiStar } from "react-icons/ci";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const Navbar = () => {

  const [toggle, settoggle] = useState(false)
  const  {user, setuser} = useContext(Authcontext)
  const [navshadow, setnavshadow] = useState('')
  const [open, setOpen] = React.useState(false);
  // console.log('usecontext done', user);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    setuser(null);
    settoggle(false)
  };
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const DrawerList = (
      <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
        {user ?
        <div className='pl-6 flex flex-col gap-4 mt-4 justify-center items-center'>
        <img className='w-[70px]' src={user.userimg} alt="" />
        <p className='text-lg font-bold'>{user.username}</p>
        <p className='text-xs text-gray-600'>{user.email}</p>
        <Link to={'/user/profile'}>
        <p className='hover:text-blue-500 transition-all flex items-center gap-1'><FaRegUser /> Profile</p>
        </Link>
        <Link to={'/addblog'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'><IoCreateOutline />
        Create Blog</p>
        </Link>
        <Link to={'/features'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'> <CiStar />
        Features</p>
        </Link>
        <Link to={'/blogs'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'><CiLocationArrow1  />
        Explore Blogs</p>
        </Link>
        <Link to={'/Aboutus'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'> <CiCircleInfo />
        Aboutus</p>
        </Link>
        {/* <Link to={'/'}> */}
        <p onClick={handleLogout} className=' hover:text-blue-500 transition-all flex items-center gap-1'> <CiLogout />
        Logout</p>
        {/* </Link> */}
       </div> :
       <div>
         <div className="without-user flex flex-col gap-6 items-center mt-10">
         <Link to={'/auth/login'}>
          <p className='bg-black text-white px-4 py-1 rounded'>Login</p>
        </Link>
         <Link to={'/auth/signup'}>
          <p className='border border-black  px-4  py-1 rounded hover:border-blue-500 hover:text-blue-500 transition-all duration-200'>Signup</p>
        </Link>
         <Link to={'/features'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'> <CiStar />
        Features</p>
        </Link>
        <Link to={'/blogs'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'><CiLocationArrow1  />
        Explore Blogs</p>
        </Link>
        <Link to={'/Aboutus'}>
        <p className=' hover:text-blue-500 transition-all flex items-center gap-1'> <CiCircleInfo />
        Aboutus</p>
        </Link>
      </div>
       </div>
        }
       
      </Box>
    );

  // useEffect(() => {
  //   TemporaryDrawer()
  // }, [open])

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      setnavshadow('shadow')
  }
    else {
      setnavshadow('')

    }
  } )
  
  
  return (
    
    <nav className={`flex px-2 sm:px-10 justify-between h-[80px] sticky top-0 z-20 bg-white items-center py-4 ${navshadow} transition-all`}>
      <div className="right flex items-center gap-0 sm:gap-10">
        <div className="menu sm:hidden">
        <p onClick={() => setOpen(!open)} className='ml-5 text-2xl'>< IoMdMenu/></p>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        </div>
        <Link to={'/'}>
        <div className="logo">
        <img src="/Images/logo.png" className=' w-[200px]' alt="Logo" />
        </div>
        </Link>
        <div className="links hidden sm:flex gap-10 justify-center">
          <Link className='text-lg' to='/features'>Features</Link>
          <Link className='text-lg' to='/Blogs'>Blogs</Link>
          <Link className='text-lg' to='/Aboutus'>About Us</Link>
        </div>
      </div>

  { user ? 
    <div className='flex items-center justify-center gap-2'>
      <img onClick={() =>  setOpen(!open)} className='w-[40px] h-[40px] mr-2 sm:mr-0 rounded-full' src={user.userimg} alt="" />
      <p className='hidden sm:inline-block'>{user.username}</p>
      <p className=' hover:text-blue-500 transition-all hidden sm:inline-block' onClick={() => settoggle(!toggle)}>< IoMdArrowDropdown /></p>
    </div> 
          :
       <div className="auth flex gap-5">
        <Link to={'/auth/signup'}>
          <p className='bg-blue-500 text-white px-4 hidden sm:block py-1 rounded'>Signup</p>
        </Link>
        <Link to={'/auth/login'}>
          <p className='bg-black text-white px-4 mr-2 sm:mr-0  py-1 rounded'>Login</p>
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
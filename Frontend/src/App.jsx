import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Features from './Pages/Features/Features'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login/Login'
import Admin from './Pages/Admin/Admin'
import Registar from './Pages/Registar/Registar'
import Footer from './Components/Footer/Footer'
import Dashboard from './Pages/Admin/Admin'
import About from './Pages/AboutUs/About'
import Profile from './Pages/Profile/Profile'
import CreateBlog from './Components/AddBlog/CreateBlog'
import Blogs from './Pages/Blogs/Blogs'
import AboutUs from './Pages/AboutUs/About'
import Blogdetails from './Pages/Blogdetails/Blogdetails'

const App = () => {
  
  // const Blogshandler = async () => {
  //   let blogs = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
  //   blogs = await blogs.json()
  //   console.log(blogs);
    
  // }
  // useEffect(() => {
  //   Blogshandler()

  // }, [])
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/auth/login' element={<Login/>}></Route>
    <Route path='/auth/signup' element={<Registar/>}></Route>
    <Route path='/admin' element={<Dashboard/>}></Route>
    <Route path='/user/profile' element={<Profile/>}></Route>
    {/* <Route path='/Aboutus' element={<About/>}></Route> */}
    {/* <Route path='/Feautures' element={<Features/>}></Route> */}
    <Route element={
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    }>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/addblog' element={<CreateBlog/>}></Route>
    <Route path='/Aboutus' element={<AboutUs/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/features' element={<Features/>}></Route>
    <Route path='/blogdetail/:id' element={<Blogdetails/>}></Route>
    </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
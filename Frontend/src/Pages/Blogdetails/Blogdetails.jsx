import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
``
const Blogdetails = () => {
  const [blogdetails, setblogdetails] = useState({}) 
  const {id} = useParams()
  // const handleblog = async () => {
    // let blog = await fetch(`https://blogging-app-mern.vercel.app/api/blogs/details/${id}`)
    // blog = blog.json()    
    // setblogdetails(blog)
    // console.log(blog);
    
    
  // } 
  // useEffect(() => {
  //   handleblog()
  //   console.log(blogdetails);

    
  // }, [])
  return (
    <div>Blogdetails</div>
  )
}

export default Blogdetails
import React, { useEffect } from 'react'

const App = () => {
  const Blogshandler = async () => {
    let blogs = await fetch(`https://blogging-app-mern.vercel.app/api/blogs`)
    blogs = await blogs.json()
    console.log(blogs);
    
  }
  useEffect(() => {
    Blogshandler()

  }, [])
  return (
    <div>App</div>
  )
}

export default App
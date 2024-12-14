import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Herosection from '../../Components/HeroSection/Herosection'
import Testinomials from '../../Components/Testinomials/Testinomials'

const Home = () => {
  const handleupload = async (event) => {
    const file = event.target.files[0]
    console.log(file);
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "Blogsapp" )
    data.append("api_key", "689265731956763" )
    let upload = await fetch(`https://api.cloudinary.com/v1_1/dt3ekhfch/upload`,{
      method: 'POST',
      body: data
    })
    upload = await upload.json()
    console.log(upload.url);
    
    
  }
  return (
    <div>
        {/* <Navbar/> */}
        <Herosection/>
        <Testinomials/>
        <input type="file" 
        onChange={handleupload}
        />

    </div>
  )
}

export default Home
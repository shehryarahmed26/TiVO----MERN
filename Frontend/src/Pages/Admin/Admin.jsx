import React, { useContext, useEffect, useState } from 'react'
import Adminbar from '../../Components/adminbar/Adminbar'
import DashboardArea from '../../Components/Dashboard/DashboardArea'
import { Authcontext } from '../../context/authcontext'

const Dashboard = () => {
  const {user} = useContext(Authcontext)
  const [auth, setauth] = useState(false)
  window.scroll(0, 0)

  // const [counter, setcounter] = useState(5)
  // const hanlecounter = () = {

  // }
  const adminemail = import.meta.env.VITE_ADMIN_EMAIL
  const adminpassword = import.meta.env.VITE_ADMIN_PASS
  
  const {email, password} = user
  useEffect(() => {
    if (email ===   adminemail && password === adminpassword) {
      setauth(true)
      // console.log('user >>',  user.email, user.password);
    }
    // console.log(email);
    // console.log(password);
    
  }, [user])
  
  const [activeSection, setActiveSection] = React.useState('blogs')

  return (
    <div className="flex h-screen bg-gray-100">
      {
        auth ? 
        <div className="admin w-full flex h-screen bg-gray-100">
          <Adminbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <DashboardArea activeSection={activeSection} />
        </div>
      : <div className="message flex mx-auto mt-36 flex-col gap-4">
        <h3 className='text-4xl text-center font-semibold text-gray-900'>Sorry, u dont have acces for this page</h3>
        <p className='text-3xl mt-4 text-gray-900 font-semibold text-center'>You are redirecting to home page </p>
        <button className='w-20 h-20 text-3xl border border-gray-800 mt-4  mx-auto rounded-full'>05</button>
      </div>
      }
    </div>
  )
}

export default Dashboard


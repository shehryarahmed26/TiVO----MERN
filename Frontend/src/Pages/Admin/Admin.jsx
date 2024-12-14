import React from 'react'
import Adminbar from '../../Components/adminbar/Adminbar'
import DashboardArea from '../../Components/Dashboard/DashboardArea'

const Dashboard = () => {
  const [activeSection, setActiveSection] = React.useState('blogs')

  return (
    <div className="flex h-screen bg-gray-100">
      <Adminbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <DashboardArea activeSection={activeSection} />
    </div>
  )
}

export default Dashboard


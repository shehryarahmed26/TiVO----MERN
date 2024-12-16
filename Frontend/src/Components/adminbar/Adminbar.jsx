import React from 'react'
import { BookOpen, Users, Clock, PenTool, LogOut, BookDashed, ChartAreaIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
// import { Button } from '@/components/ui/button'

const Adminbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Dashboard', icon: ChartAreaIcon, section: 'dashboard' },
    { name: 'Blogs', icon: BookOpen, section: 'blogs' },
    { name: 'Users', icon: Users, section: 'users' },
    { name: 'Pending Blogs', icon: Clock, section: 'pendingBlogs' },
  ]

  return (
    <div className="w-64 bg-white shadow-md  h-screen">
      <div className="p-4">
        <Logo />
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <button
            key={item.section}
            variant={activeSection === item.section ? 'secondary' : 'ghost'}
            className={`flex items-center gap-2 px-4 mt-4 w-full py-2 justify-start ${activeSection == item.section ? 'bg-gray-100' : ''}`}
            onClick={() => setActiveSection(item.section)}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4">
        <Link to={'/'}>
        <button variant="ghost" className={`w-full flex items-center px-6 rounded py-1 justify-start hover:bg-red-600 hover:text-white transition-all`}>
          <LogOut className="mr-2 h-4 w-4" />
          Back
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Adminbar

const Logo = () => (
  <div className="text-2xl font-bold text-gray-800">Admin Dashboard</div>
)


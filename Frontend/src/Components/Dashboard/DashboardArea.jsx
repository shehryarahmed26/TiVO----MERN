import React from 'react'
import Tracking from '../Tracking/Tracking'

const DashboardArea = ({ activeSection }) => {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-4xl text-center font-bold mb-6 capitalize">{activeSection}</h1>
      {/* Placeholder content for each section */}
      {activeSection === 'dashboard' && <Tracking />}
      {activeSection === 'blogs' && <BlogsSection />}
      {activeSection === 'users' && <UsersSection />}
      {activeSection === 'pendingBlogs' && <PendingBlogsSection />}
      {activeSection === 'createBlog' && <CreateBlogSection />}
    </div>
  )
}

export default DashboardArea

// Placeholder components for each section
const BlogsSection = () => <div>Blogs content goes here</div>
const UsersSection = () => <div>Users content goes here</div>
const PendingBlogsSection = () => <div>Pending Blogs content goes here</div>
const CreateBlogSection = () => <div>Create Blog form goes here</div>


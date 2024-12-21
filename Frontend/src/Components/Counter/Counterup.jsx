import React from 'react'
import CountUp from 'react-countup';


const Counterup = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-4xl font-bold text-blue-500"><CountUp end={1000}   enableScrollSpy={true} duration={2}/>+</h3>
        <p className="text-gray-600">Blogs Published</p>
      </div>
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-4xl font-bold text-blue-500"><CountUp end={500} enableScrollSpy={true} duration={2}/>+</h3>
        <p className="text-gray-600">Active Users</p>
      </div>
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-4xl font-bold text-blue-500"><CountUp end={50} enableScrollSpy={true} duration={2}/>+</h3>
        <p className="text-gray-600">Categories Covered</p>
      </div>
  </div>
  )
}

export default Counterup
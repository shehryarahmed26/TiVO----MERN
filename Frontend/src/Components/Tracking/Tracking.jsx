import React from 'react'

const Tracking = () => {
  return (
    <div className='flex mt-20 items-center justify-center gap-10'>
        <div className="circle flex flex-col items-center justify-center gap-2 w-[240px] h-[240px] bg-blue-600 rounded-full">
            <h3 className='text-white font-bold text-3xl'>Total Blogs</h3>
            <p className='text-white text-3xl'>05</p>
        </div> 
        <div className="circle flex flex-col items-center justify-center gap-2 w-[240px] h-[240px] bg-purple-600 rounded-full">
        <h3 className='text-white font-bold text-3xl'>Users</h3>
        <p className='text-white text-3xl'>05</p>
        </div>
        <div className="circle flex flex-col items-center justify-center gap-2 w-[240px] h-[240px] bg-red-600 rounded-full">
        <h3 className='text-white font-bold text-3xl'>Pending Blogs</h3>
        <p className='text-white text-3xl'>00</p>
        </div>
    </div>
  )
}

export default Tracking
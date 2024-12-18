import React from 'react'

const Categories = () => {
  const categories = ['Sports', 'Technology', 'Travel', 'Lifestyle', 'Education', 'Entertainment', 'Fooding', 'Medical', 'Fun', 'Knowledge', 'Business']
  return (
    // {/
    // * Categories Marquee */}
    <div>
      <h2 className='text-gray-900 text-center text-4xl mb-10 font-semibold'>Categories</h2>
    <div className="bg-black py-4 overflow-hidden sm:mx-11">
    <div className="whitespace-nowrap animate-marquee">
      {categories.map((category, index) => (
        <span key={index} className="text-white text-lg mx-8">
          {category}
        </span>
      ))}
    </div>
  </div>
  </div>
  )
}

export default Categories
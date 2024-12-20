import React, { useContext } from 'react';
import { Authcontext } from '../../context/authcontext';
import { Link } from 'react-router-dom';

const Features = () => {
  const {user} = useContext(Authcontext)
  return (
    <div className=" py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Discover Amazing Features</h2>
        <p className="mt-4 px-10 sm:px-0 text-gray-600">
          Unlock the full potential of blogging with our powerful features.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-between text-center">
        <div className="w-[50%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/content-writing.png'} alt="" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Easy Blog Publishing</h3>
          <p className="text-xs sm:text-sm max-w-[70%] text-gray-600 mt-2">
          Create and publish blogs effortlessly with our platform. Share ideas, customize content and many more.         </p>
        </div>

        <div className="w-[50%] mb-10 flex flex-col items-center justify-center">
          <div className="text-green-500 text-4xl mb-4">
          <img className='w-[100px]' src={'/Images/team.png'} alt="" />

          </div>
          <h3 className="text-lg font-semibold text-gray-800">User Profiles</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-[70%]">
          Build your profile to showcase blogs, connect with others, share ideas, and grow your audience effortlessly.          </p>
        </div>

        <div className="w-[50%] mb-10 flex flex-col items-center justify-center">
          <div className="text-purple-500 text-4xl mb-4">
          <img className='w-[100px]' src={'/Images/web-design.png'} alt="" />

          </div>
          <h3 className=" text-lg font-semibold text-gray-800">Flexible ui/ux</h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-[70%]">
          Enjoy and feel the uxer experience with attractive and modern ui interface design by our experts.          </p>
        </div>

        <div className="w-[50%] mb-10 flex flex-col items-center justify-center">
          <div className="text-yellow-500 text-4xl mb-4">
          <img className='w-[100px]' src={'/Images/publicity.png'} alt="" />

          </div>
          <h3 className="text-lg font-semibold text-gray-800">Categories Management</h3>
          <p className="text-xs  sm:text-sm text-gray-600 mt-2 max-w-[70%]">
          Organize your blogs into categories to enhance discoverability, making it easier for readers.          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Categories</h2>
        <div className="flex flex-wrap justify-center sm:gap-8 text-center">
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/sports.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800"> Sports</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
          in-depth match analyses to fitness tips for athletes, dive into a world of action and inspiration that keeps you moving. Stay updated and inspired!"          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/fitness.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Gym</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
          Achieve your fitness goals with our gym-focused blogs. Discover workout plans, expert advice on strength training, and tips for building endurance.          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/virtual.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Technology</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
           Explore the latest trends, gadgets, and innovations shaping the future. From AI to smart devices, discover insights that fuel your curiosity.          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/airplane.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Travel</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
         Discover hidden gems, travel tips, and breathtaking destinations around the globe. Let us inspire your next journey."          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/education.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Learning</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
          Gain knowledge, tips, and resources to enhance your skills and achieve your goals. Make every day a learning experience!          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/fast-food.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Food</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
           From mouthwatering recipes to culinary tips and the latest food trends, satisfy your cravings and ignite your love for food          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/health-report.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Medical</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
          Learn about health tips, medical breakthroughs, and expert advice for a healthier life. Empower yourself with knowledge that matters          </p>
        </div>
        <div className="w-[50%] sm:w-[30%] mb-10 flex flex-col items-center justify-center">
          <div className="text-blue-500 text-4xl mb-4">
            <img className='w-[100px]' src={'/Images/online-analytical.png'} alt="" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800">Business</h3>
          <p className="text-xs sm:text-sm  text-gray-600 mt-2">
          Navigate the world of entrepreneurship with our business blogs. Discover strategies, market trends, and insights to take your business to the next level.       </p>
        </div>
        </div>
      </div>

      {/* Categories Marquee */}
      {/* <div className="bg-black py-4 overflow-hidden mx-11">
        <div className="whitespace-nowrap animate-marquee">
          {['Sports', 'Technology', 'Travel', 'Lifestyle', 'Education', 'Entertainment', 'Fooding', 'Medical', 'Fun', 'Knowledge', 'Business'].map((category, index) => (
            <span key={index} className="text-white text-lg mx-8">
              {category}
            </span>
          ))}
        </div>
      </div> */}

      {/* Call to Action Section */}
      { !user &&
      <div className="mt-16 bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Start Your Blogging Journey?</h2>
        <p className="mt-4 px-10 sm:px-0">Join our platform and share your ideas with the world!</p>
        <Link to={'/auth/login'}>
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded shadow-md hover:bg-blue-600 transition-all duration-300">
          Get Started
        </button>
        </Link>
      </div>
      }
    </div>
  );
};

export default Features;

// Tailwind CSS animation (add this to your global CSS file)


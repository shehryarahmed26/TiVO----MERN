import React from "react";
import CountUp from 'react-countup';
import Counterup from "../../Components/Counter/Counterup";


const AboutUs = () => {
  // const stats = [
  //   { value: "10K+", label: "Blogs Published" },
  //   { value: "500+", label: "Active Users" },
  //   { value: "50+", label: "Categories Covered" },
  // ];
  window.scroll(0, 0)

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-14 px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto px-0 sm:px-48  text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About us
          </h1>
          <p className="mt-6 text-base sm:text-xl">
          At Tivo, we are dedicated to empowering bloggers and readers alike by providing a seamless platform that transforms the blogging experience.
          </p>
          <a
            href="#learn-more"
            className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto py-20 px-6 sm:px-12 lg:px-20" id="learn-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
              alt="Our Journey"
              className="rounded-lg shadow-md"
            />
            <div className="absolute top-0 left-0 bg-blue-500 opacity-50 w-32 h-32 rounded-full blur-xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
            Tivo was founded on the principles of creativity, community, and innovation. Our vision is to create a platform where sharing ideas and stories brings people together.
            </p>
            <p className="text-gray-600 leading-relaxed">
            Whether you're an aspiring writer or an enthusiastic reader, we ensure a seamless and inspiring blogging experience.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-blue-500"><CountUp end={100} duration={5}/>k</h3>
                <p className="text-gray-600">Blogs Published</p>
              </div>
          </div> */}
          <Counterup/>
        </div>
      </div>
      <section data-aos='zoom-in' className="text-gray-600 body-font">
      <h2 className="text-2xl py-8 font-extrabold text-gray-800 text-center sm:text-5xl">
          Our Team Members
        </h2>

  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="/Images/shehryar.jpg"
          />
          <p className="leading-relaxed">
          Shehryar Ahmed is a skilled software developer with passionate for building high quality softwares that solves real world problems. 
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Shehryar Ahmed | Founder
          </h2>
          <p className="text-gray-500">Software Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="/Images/shahab.jpeg"
          />
          <p className="leading-relaxed">
          Shahabuddin Ghori is also a skilled software developer with expertise in creating innovative solutions and enhance user experience. 
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Shahabudin Ghori
          </h2>
          <p className="text-gray-500">Software Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="/Images/kaif.jpeg"
          />
          <p className="leading-relaxed">
          Muhammad Kaif is a emerging frontend developer with a passion of ui/ux designs and enhance user experience
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Inam Ullah Khan
          </h2>
          <p className="text-gray-500">SQA Engineer</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutUs;
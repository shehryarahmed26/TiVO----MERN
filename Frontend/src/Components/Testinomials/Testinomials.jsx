import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testinomials = () => {
  const testinomials = [
    { name: "John Doe", text: "This platform has been a game-changer for sharing my articles! The user-friendly interface makes it so easy to connect with my audience and get real-time feedback. Blogging here is an absolute delight.", uri: "data:image/jpeg;base64,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" },
    { name: "Jane Smith", text: "I enjoy reading blogs here every day, and I love how I can find content on so many diverse topics. The platform's clean and responsive design makes the reading experience truly enjoyable.", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZ9bSKtBdKPEULVW5FnSjsK8__iEy-PqeusSCxIahCym6QkodyjCcsaA5uaSR_8A4mSc&usqp=CAU" },
    { name: "Alex Lee", text: "As a content creator, this app has everything I need to publish and manage my blogs efficiently. The seamless publishing process and interactive features have helped me grow my audience like never before.", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5HDjDPRN6x4LMZ3OIJLejrdnaILx7BybY_btZyE5AX09zVE8HsfnZ-CNzxSMs96xgqU&usqp=CAU" },
  ]
  return (
    <section className="py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl  my-6 font-semibold text-gray-800">Testimonials</h2>
          <div className="mt-10 sm:hidden gap-8 hidden sm:grid-cols-2 lg:grid-cols-3">
            {testinomials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg flex  flex-col items-center justify-center gap-2"
              >
                <img className='w-[100px] h-[100px] rounded-full object-cover' src={testimonial.uri} alt="" />
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <h3 className="mt-4 text-lg font-medium text-gray-800">
                  - {testimonial.name}
                </h3>
              </div>
            ))}
          </div>
          <Carousel autoPlay={true}  infiniteLoop  showIndicators={false} showArrows={false} showStatus={false} showThumbs={false}>
          {/* <div className="mt-10 flex overflow-hidden"> */}
            {testinomials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white w-full rounded-lg shadow hover:shadow-lg flex  flex-col items-center justify-center gap-2"
              >
                <img className='max-w-[100px] h-[100px] rounded-full object-cover' src={testimonial.uri} alt="" />
                <p className="text-gray-600 text-sm sm:text-base italic sm:px-72">"{testimonial.text}"</p>
                <h3 className="mt-4 text-lg font-medium text-gray-800">
                  - {testimonial.name}
                </h3>
              </div>
            ))}
          {/* </div>     */}
            </Carousel>
        </div>
      </section>
  )
}

export default Testinomials
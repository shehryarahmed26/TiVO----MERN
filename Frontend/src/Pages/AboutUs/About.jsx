import Navbar from "../../Components/Navbar/Navbar";
import shahab from "../img/shahab.jpeg";
import kaif from "../img/kaif.jpeg";
import siddique from "../img/siddique.jpeg";
import Footer from "../../Components/Footer/Footer";
// import { redirect, useNavigate } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white text-gray-800">
                <div className="container mx-auto px-6 py-16 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-600 transform transition duration-500 ease-in-out hover:scale-105 hover:text-blue-800">
                            About Us
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed transform transition duration-300 hover:text-gray-800">
                            Welcome to our blog! We are a team of passionate designers, and developers who are dedicated to providing high-quality, insightful articles on a wide variety of topics.
                            From web development tutorials to the latest trends in technology, our content aims to inform, inspire, and entertain.
                        </p>

                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                                Our Mission
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Our mission is to create a space where people can explore new ideas, stay informed, and get inspired. We aim to provide high-quality content that is accessible and relevant to everyone, especially those passionate about technology and web development.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                                Our Vision
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                We envision a world where people continuously learn and grow through content that is informative, thoughtful, and inspiring. Our platform is a place where readers can come together, share stories, and explore diverse perspectives in the field of web development, technology, and beyond.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                                Our Core Values
                            </h2>
                            <ul className="list-disc pl-8 text-lg md:text-xl text-gray-600">
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Integrity - We value honesty and transparency in every line of code and every article we write.</li>
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Creativity - We embrace innovative solutions to web development challenges and unique content creation.</li>
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Inclusivity - We believe that every developer, no matter their background, should have access to knowledge and opportunities in the tech world.</li>
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Quality - We prioritize delivering high-quality content and well-structured, efficient code that our readers and users can trust.</li>
                            </ul>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 transform transition duration-500 ease-in-out hover:scale-105">
                                Meet Our Team
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {/* Shahab */}
                                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src={shahab}
                                        alt="Team Member"
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">Shahab Uddin</h3>
                                    <p className="text-gray-500">MERN Developer</p>
                                    <p className="text-gray-600 text-sm mt-2">
                                        Shahab is a full-stack developer with expertise in building dynamic, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
                                        He is passionate about coding, problem-solving, and continuously exploring new technologies in web development.
                                    </p>
                                </div>
                                {/* Kaif */}
                                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src={kaif}
                                        alt="Team Member"
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">Kaif Khan</h3>
                                    <p className="text-gray-500">Front-End Developer</p>
                                    <p className="text-gray-600 text-sm mt-2">
                                        Kaif specializes in front-end development, building beautiful, responsive web designs with modern frameworks like React. He is committed to crafting user-friendly and aesthetically pleasing interfaces that enhance the user experience.
                                    </p>
                                </div>
                                {/* Siddique */}
                                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src={siddique}
                                        alt="Team Member"
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">Siddique Ahmed</h3>
                                    <p className="text-gray-500">Problem Solver</p>
                                    <p className="text-gray-600 text-sm mt-2">
                                        Siddique is a skilled developer and problem solver. He thrives on tackling complex challenges in web development and finding optimal solutions. His expertise ranges from debugging to creating robust, high-performance web apps.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <p className="text-lg font-medium text-gray-600">
                                Thank you for visiting our blog. We hope you find our content valuable, whether you're a beginner or a seasoned developer. Stay connected with us for more tutorials, tips, and insights into the ever-evolving world of web development!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default About;
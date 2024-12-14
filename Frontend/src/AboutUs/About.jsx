import Navbar from "../Components/Navbar/Navbar";

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
                            Welcome to our blog! We are a team of passionate writers, designers, and creators dedicated to delivering insightful articles
                            on a wide range of topics. From tech to lifestyle, we provide engaging content that aims to inform, inspire, and entertain.
                        </p>

                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                                Our Mission
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Our mission is to create a space where people can explore new ideas, stay informed, and get inspired. We aim to provide
                                high-quality content that is accessible and relevant to everyone.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                                Our Vision
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                We envision a world where people continuously learn and grow through content that is informative, thoughtful, and inspiring.
                                Our platform is a place where readers can come together, share stories, and explore diverse perspectives.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                                Our Core Values
                            </h2>
                            <ul className="list-disc pl-8 text-lg md:text-xl text-gray-600">
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Integrity - We write with honesty and transparency.</li>
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Creativity - We embrace innovative ideas in every piece of content.</li>
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Inclusivity - We value diverse voices and perspectives.</li>
                                <li className="mb-3 transform transition duration-300 hover:text-blue-600 hover:scale-105">Quality - We prioritize providing well-researched, thought-provoking articles.</li>
                            </ul>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 transform transition duration-500 ease-in-out hover:scale-105">
                                Meet Our Team
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="Team Member"
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                                    <p className="text-gray-500">Chief Editor</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="Team Member"
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                                    <p className="text-gray-500">Content Writer</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="Team Member"
                                        className="w-32 h-32 rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800">Sarah Lee</h3>
                                    <p className="text-gray-500">Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <p className="text-lg font-medium text-gray-600">
                                Thank you for visiting our blog. We hope you find our content engaging and valuable. Stay connected for more articles, tips,
                                and insights to help you grow and learn!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
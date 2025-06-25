import React from 'react';
import { FaCode, FaRocket, FaMobileAlt } from 'react-icons/fa';

const ServiceSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-10 rounded-2xl mt-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
                    What I <span className="text-blue-600">Offer</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                        <FaCode className="text-4xl text-blue-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Frontend Development</h3>
                        <p className="text-gray-600">
                            Modern, fast, and responsive interfaces using React, Tailwind, and more.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                        <FaRocket className="text-4xl text-blue-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Website Optimization</h3>
                        <p className="text-gray-600">
                            Speed and SEO optimization to boost performance and rankings.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                        <FaMobileAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Responsive Design</h3>
                        <p className="text-gray-600">
                            Pixel-perfect layouts that adapt beautifully to all screen sizes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;

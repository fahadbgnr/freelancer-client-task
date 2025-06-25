import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-10 rounded-2xl mt-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
                    What <span className="text-blue-600">Clients Say</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left">
                        <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
                        <p className="text-gray-700 mb-4">
                            "Fahad was a pleasure to work with. He delivered the project on time and exceeded our expectations. Highly recommended!"
                        </p>
                        <h4 className="text-md font-semibold text-gray-800">— John Doe, Business Owner</h4>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left">
                        <FaQuoteLeft className="text-3xl text-blue-600 mb-4" />
                        <p className="text-gray-700 mb-4">
                            "Very skilled in frontend development. My website looks amazing and performs flawlessly."
                        </p>
                        <h4 className="text-md font-semibold text-gray-800">— Sarah Lee, Entrepreneur</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

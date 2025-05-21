import React from 'react';

const TestimonialSection = () => {
    return (
        <div>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl">
                            <p className="text-gray-700 mb-4">"Fahad was a pleasure to work with. He delivered the project on time and exceeded our expectations. Highly recommended!"</p>
                            <h4 className="text-md font-semibold">— John Doe, Business Owner</h4>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg hover:shadow-xl">
                            <p className="text-gray-700 mb-4">"Very skilled in frontend development. My website looks amazing and performs flawlessly."</p>
                            <h4 className="text-md font-semibold">— Sarah Lee, Entrepreneur</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialSection;
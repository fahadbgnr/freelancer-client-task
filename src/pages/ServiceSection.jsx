import React from 'react';

const ServiceSection = () => {
    return (
        <div>
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">What I Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                            <p className="text-gray-600">Modern, fast, and responsive interfaces using React, Tailwind, and more.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Website Optimization</h3>
                            <p className="text-gray-600">Speed and SEO optimization to boost performance and rankings.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                            <p className="text-gray-600">Pixel-perfect layouts that adapt beautifully to all screen sizes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceSection;
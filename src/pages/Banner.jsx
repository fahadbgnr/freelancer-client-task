import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-lg shadow-lg">
                <div id="slide1" className="carousel-item relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/1600x400/?technology')` }}>
                    <div className="absolute flex items-center justify-center h-full w-full bg-black bg-opacity-50">
                        <h2 className="text-white text-3xl md:text-5xl font-bold text-center">Welcome to Our Freelance Service</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/1600x400/?programming')` }}>
                    <div className="absolute flex items-center justify-center h-full w-full bg-black bg-opacity-50">
                        <h2 className="text-white text-3xl md:text-5xl font-bold text-center">Expert Frontend Development</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('https://source.unsplash.com/1600x400/?design')` }}>
                    <div className="absolute flex items-center justify-center h-full w-full bg-black bg-opacity-50">
                        <h2 className="text-white text-3xl md:text-5xl font-bold text-center">Fast & Responsive Designs</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import Banner from '../pages/Banner';
import ServiceSection from '../pages/ServiceSection';
import TestimonialSection from '../pages/TestimonialSection';
import FeaturedTaskSection from '../pages/FeaturedTaskSection';

const Home = () => {
    return (
        <div>
            <div className='gap-5'>
                <Banner></Banner>
                <FeaturedTaskSection></FeaturedTaskSection>
                <ServiceSection></ServiceSection>
                <TestimonialSection></TestimonialSection>
            </div>
        </div>
    );
};

export default Home;
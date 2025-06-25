import React from 'react';
import Banner from '../pages/Banner';
import ServiceSection from '../pages/ServiceSection';
import TestimonialSection from '../pages/TestimonialSection';
import FeaturedTaskSection from '../pages/FeaturedTaskSection';
import { Helmet } from 'react-helmet';
import WhyChooseUs from '../pages/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>TaskHive||Home</title>
                </Helmet>
            <div className='w-11/12 mx-auto '>
                <Banner></Banner>
                <FeaturedTaskSection></FeaturedTaskSection>
                <ServiceSection></ServiceSection>
                <TestimonialSection></TestimonialSection>
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default Home;
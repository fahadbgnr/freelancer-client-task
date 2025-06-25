import React from 'react';
import Banner from '../pages/Banner';
import ServiceSection from '../pages/ServiceSection';
import TestimonialSection from '../pages/TestimonialSection';
import FeaturedTaskSection from '../pages/FeaturedTaskSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>TaskHive||Home</title>
                </Helmet>
            <div className='w-11/12 mx-auto gap-5'>
                <Banner></Banner>
                <FeaturedTaskSection></FeaturedTaskSection>
                <ServiceSection></ServiceSection>
                <TestimonialSection></TestimonialSection>
            </div>
        </div>
    );
};

export default Home;
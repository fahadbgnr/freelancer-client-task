import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseTaskCard from './BrowseTaskCard';

const BrowseTasks = () => {
    const freelancersData = useLoaderData();
    console.log(freelancersData);
    return (

        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Browse Tasks</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

           {
            freelancersData.map(browseTask=> <BrowseTaskCard key={browseTask._id} browseTask={browseTask} ></BrowseTaskCard>)
           }
        </div>
        </div>




       
    );
};

export default BrowseTasks;
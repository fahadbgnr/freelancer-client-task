import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
             <div>
            <div className=' py-24 text-center' >
                <Helmet>
                    <title>TaskHive||Errorpage</title>
                </Helmet>
                <h1 className='mb-8 text-4xl lg:text-7xl font-semibold text-accent'>
                    {
                        error?.status || 404
                    }
                </h1>

                <p className='mb-3  text-xl font-bold text-secondary md:text-2xl '>
                    {error?.error?.massage || "Something want wrong!"}

                </p>
                <Link className='btn btn-secondary rounded-2xl' to='/'>
                Go To Homepage

                </Link>

            </div>
        </div>
        </div>
    );
};

export default ErrorPage;
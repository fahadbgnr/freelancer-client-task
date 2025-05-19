import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto my-3'>
                <Header></Header>
            </div>
          <main className='w-11/12 mx-auto'>
              <Outlet></Outlet>
          </main>
           <footer className='w-11/12 mx-auto mt-3'>
             <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;
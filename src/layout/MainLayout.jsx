import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
          <main className='w-11/12 mx-auto mt-20'>
              <Outlet></Outlet>
          </main>
           <footer>
             <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;
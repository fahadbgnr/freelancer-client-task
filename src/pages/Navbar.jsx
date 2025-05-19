import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
// import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    // const {user, logOut}= use(AuthContext);
    // const handleLogout=()=>{
    //     // console.log("user trying to log out")
    //     logOut().then(() => {
    //         alert("you logged out successfully")
    //         toast.success("Log out successfully")
    //       }).catch((error) => {
    //         console.log(error);
    //         toast.error("please try again")
    //       });
    // }

    const link = <>

        <NavLink to='/' className='m-2 active:text-indigo-800' >Home</NavLink>
        <NavLink to='/addTask' className='m-2 active:text-indigo-800'>AddTask</NavLink>
        <NavLink to='/browseTasks' className='m-2 active:text-indigo-800'>BrowseTasks</NavLink>
        <NavLink to='/myPostedTasks' className='m-2 active:text-indigo-800'>MyPostedTasks</NavLink>



    </>




    return (

        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* <div className=''>{user && user.email }</div> */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <h2 className="text-xs mg:text-2xl lg:text-3xl">Freelance Task Marketplace</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {/* <img className='px-5 w-20 rounded-full' src={`${user ? user.photoURL: userIcon}`} alt="" /> */}
                <img className='w-12' src={`${userIcon}`} alt="" />
                {
                    // user ? <Link to='/auth/login' onClick={handleLogout} className='btn btn-primary'>Logout</Link> : <Link to='/auth/login' className="btn btn-primary">Login</Link>
                }
                <Link to='/loginPage' className='btn btn-primary mx-2' >Logout</Link>
                <Link to='/signUp' className='btn btn-primary mx-2' >SignUp</Link>
                
            </div>
        </div>

    );
};

export default Navbar;
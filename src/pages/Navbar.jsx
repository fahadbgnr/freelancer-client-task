import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; 
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    const { user, logoutUser, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, log out"
        }).then((result) => {
            if (result.isConfirmed) {
                import('firebase/auth').then(({ getAuth, signOut }) => {
                    const auth = getAuth();
                    signOut(auth).then(() => {
                        setUser(null);
                        Swal.fire("Logged Out!", "", "success");
                    }).catch((error) => {
                        console.error("Logout error:", error);
                        logoutUser();
                    });
                });
            }
        });
    };

    const navLinks = (
        <>
            <NavLink to='/' className='m-2'>Home</NavLink>
            <NavLink to='/browseTasks' className='m-2'>Browse Tasks</NavLink>
            {
                user && (
                    <>
                        <NavLink to='/addTask' className='m-2'>Add Task</NavLink>
                        <NavLink to='/myPostedTasks' className='m-2'>My Posted Tasks</NavLink>
                    </>
                )
            }
            <NavLink to="/dashboard" className='m-2'>Dashboard</NavLink>
            <NavLink to="/about" className='m-2'>About Us</NavLink>
            <NavLink to="/contact" className='m-2'>Contact</NavLink>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-[999] bg-base-100 shadow-sm">
            <div className="navbar px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-12 md:w-16' src={Logo} alt="Logo" />
                        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
                            <span className="text-blue-600">Tasks</span>Hive
                        </h2>
                    </div>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-4">
                    {user ? (
                        <>
                            <div className="relative group">
                                <img
                                    src={user.photoURL || userIcon}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                                />
                                <div
                                    className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded mt-1 whitespace-nowrap">
                                    {user.displayName || user.email}
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to='/loginPage' className="btn btn-primary">Login</Link>
                            <Link to='/signUp' className="btn btn-secondary">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logoutUser,setUser } = use(AuthContext);

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
            <NavLink to='/addTask' className='m-2'>Add Task</NavLink>
            <NavLink to='/browseTasks' className='m-2'>Browse Tasks</NavLink>
            <NavLink to='/myPostedTasks' className='m-2'>My Posted Tasks</NavLink>
        </>
    );





    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <h2 className="text-xs md:text-2xl lg:text-3xl">Freelance Task Marketplace</h2>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                {user ? (
                    <>
                        <div className="relative group">
                            <img
                                src={user.photoURL || userIcon}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-gray-300"
                            />
                            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded mt-1">
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

    );
};

export default Navbar;
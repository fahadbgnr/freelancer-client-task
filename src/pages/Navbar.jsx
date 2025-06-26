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
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/browseTasks">Browse Tasks</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/addTask">Add Task</NavLink></li>
          <li><NavLink to="/myPostedTasks">My Posted Tasks</NavLink></li>
        </>
      )}
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-[999]">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left: Logo + Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-10 md:w-12" src={Logo} alt="Logo" />
            <span className="text-lg md:text-xl font-bold">
              <span className="text-blue-600">Tasks</span>Hive
            </span>
          </Link>
        </div>

        {/* Center: Nav Menu for large devices */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Right: Auth Actions */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  src={user.photoURL || userIcon}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                />
                <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded mt-1 whitespace-nowrap">
                  {user.displayName || user.email}
                </div>
              </div>
              <button onClick={handleLogout} className="btn btn-sm btn-primary">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/loginPage" className="btn btn-sm btn-primary">Login</Link>
              <Link to="/signUp" className="btn btn-sm btn-secondary">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

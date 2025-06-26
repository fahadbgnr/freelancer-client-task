import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '../assets/Logo.png';
import {
  LayoutDashboard,
  LineChart,
  ClipboardList,
  Home,
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
       <Helmet>
        <title>TaskHive || Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Top Navbar (Mobile Only) */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-lg font-semibold">Dashboard</div>
        </div>

        {/* Optional Banner */}
        <div className="p-4 bg-base-100 border-b border-base-300">
          <h1 className="text-2xl font-semibold text-primary">Welcome to Your Dashboard</h1>
          <p className="text-sm text-gray-500">Use the sidebar to manage your tasks and view stats.</p>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
          <img className="w-16 mb-6" src={Logo} alt="Logo" />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-primary font-semibold' : ''
              }
            >
              <Home className="inline-block mr-2" size={18} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/jobBudgetChart"
              className={({ isActive }) =>
                isActive ? 'text-primary font-semibold' : ''
              }
            >
              <LineChart className="inline-block mr-2" size={18} />
              Job Budget Chart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myPostedTasks"
              className={({ isActive }) =>
                isActive ? 'text-primary font-semibold' : ''
              }
            >
              <ClipboardList className="inline-block mr-2" size={18} />
              My Posted Tasks
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;

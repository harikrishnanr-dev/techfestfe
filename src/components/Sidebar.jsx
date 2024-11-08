import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Sidebar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
      
    <>
      <div className="bg-gray-950 text-gray-50 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-blue-800 dark:text-white">
        <h1 className='text-2xl font-bold hidden md:block mt-4'>Tech Fest</h1>
        <ul className='flex flex-col mt-5 text-xl'>
          <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
            <span className='hidden md:inline'>Dashboard</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
            <span className="hidden md:inline">Users</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
            <span className="hidden md:inline">Participants</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
            <span className="hidden md:inline">Events</span>
          </li>
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:text-white hover:bg-blue-600">
            <span className="hidden md:inline">Sponsors</span>
          </li>

          {/* Logout item */}
          <li className="flex items-center py-3 px-2 space-x-4 mt-auto mb-2 hover:rounded hover:cursor-pointer hover:bg-red-600 hover:text-white">
            <span className="hidden md:inline">Logout</span>
          </li>
        </ul>
          </div>
          

          {/* Mobile Nav Icon */}
          <div onClick={handleNav} className="block md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />

            </div>

            {/* Mobile Nav Menu */}
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">TF.</h1>
                <li className="p-4 border-b border-gray-100">Dashboard</li>
                <li className="p-4 border-b border-gray-100">users</li>
                <li className="p-4 border-b border-gray-100">Participants</li>
                <li className="p-4 border-b border-gray-100">Events</li>
                <li className="p-4 border-b border-gray-100">Sponsors</li>
            </ul>
    </>
  );
};

export default Sidebar;

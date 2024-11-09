import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Sidebar = ({ onTabChange }) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleTabClick = (tab) => {
        onTabChange(tab); // Notify parent about the clicked tab
    };

    return (
        <>
            <div className="bg-gray-950 text-gray-50 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-blue-800 dark:text-white">
                <h1 className='text-2xl font-bold hidden md:block mt-4'>Tech Fest</h1>
                <ul className='flex flex-col mt-5 text-xl'>
                    <li 
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => handleTabClick('dashboard')}
                    >
                        <span className='hidden md:inline'>Dashboard</span>
                    </li>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => handleTabClick('users')}
                    >
                        <span className="hidden md:inline">Users</span>
                    </li>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => handleTabClick('participants')}
                    >
                        <span className="hidden md:inline">Participants</span>
                    </li>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => handleTabClick('events')}
                    >
                        <span className="hidden md:inline">Events</span>
                    </li>
                    <li
                        className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white"
                        onClick={() => handleTabClick('sponsors')}
                    >
                        <span className="hidden md:inline">Sponsors</span>
                    </li>

                    {/* Logout item */}
                    <li className="flex items-center py-3 px-2 space-x-4 mt-auto mb-2 hover:rounded hover:cursor-pointer hover:bg-red-600 hover:text-white">
                        <span className="hidden md:inline">Logout</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;

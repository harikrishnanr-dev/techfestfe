import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Header() {
    const [nav, setNav] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">TF.</h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center">
                <li className="p-4">Home</li>
                <li className="p-4">Events</li>
                <li className="p-4">Competitions</li>
                <li className="p-4">Workshops</li>
                <li className="p-4">Contact</li>

                {/* Buttons for logged-in users */}
                <div className="flex items-center space-x-4">
                    {isLoggedIn && (
                        <button className="p-2 outline-green-500 text-white rounded-md">
                            Cart
                        </button>
                    )}
                    <button onClick={toggleLogin} className="p-2 bg-[#00df9a] text-black rounded-md">
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </div>
            </ul>

            {/* Mobile Nav Icon */}
            <div onClick={handleNav} className="block md:hidden">
                <FontAwesomeIcon icon={faBars} />
            </div>

            {/* Mobile Nav Menu */}
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">TF.</h1>
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Events</li>
                <li className="p-4 border-b border-gray-600">Competitions</li>
                <li className="p-4 border-b border-gray-600">Workshops</li>
                <li className="p-4 border-b border-gray-600">Contact</li>
                {isLoggedIn && <li className="p-4 border-b border-gray-600">Booked Events</li>}
                <button onClick={toggleLogin} className="p-4 bg-[#00df9a] text-black rounded-md m-4">
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </ul>
        </div>
    );
}

export default Header;

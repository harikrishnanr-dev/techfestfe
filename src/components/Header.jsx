import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutModal({ isVisible, onConfirm, onCancel }) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-black">
        <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page after logout
    setShowModal(false); // Close modal
  };

  const handleLoginRedirect = () => {
    navigate("/login");
    setNav(false); // Close mobile nav if open
  };

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

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

        <div className="flex items-center space-x-4">
          {isLoggedIn && (
            <button className="p-2 outline-green-500 text-white rounded-md">
              Cart
            </button>
          )}
          <button
            onClick={isLoggedIn ? handleLogoutClick : handleLoginRedirect}
            className="p-2 bg-[#00df9a] text-black rounded-md"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </ul>

      {/* Mobile Nav Icon */}
      <div onClick={handleNav} className="block md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Mobile Nav Menu */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">TF.</h1>
        <li onClick={handleNav} className="p-4 border-b border-gray-600">
          Home
        </li>
        <li onClick={handleNav} className="p-4 border-b border-gray-600">
          Events
        </li>
        <li onClick={handleNav} className="p-4 border-b border-gray-600">
          Competitions
        </li>
        <li onClick={handleNav} className="p-4 border-b border-gray-600">
          Workshops
        </li>
        <li onClick={handleNav} className="p-4 border-b border-gray-600">
          Contact
        </li>
        {isLoggedIn && (
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            Booked Events
          </li>
        )}
        <button
          onClick={isLoggedIn ? handleLogoutClick : handleLoginRedirect}
          className="p-4 bg-[#00df9a] text-black rounded-md m-4"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </ul>

      {/* Logout Modal */}
      <LogoutModal
        isVisible={showModal}
        onConfirm={handleLogout}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
}

export default Header;

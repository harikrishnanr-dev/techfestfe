import React, { useState } from "react";
import { toast } from 'react-toastify';  // Importing toast
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    college: "",
    batch: "",
    year: "",
    phonenumber: "",
  });

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, college, batch, year, phonenumber } = userData;

    if (!email || !password || (isSignUp && (!firstname || !lastname || !college || !batch || !year || !phonenumber))) {
      toast.warning("Please fill the form completely");
    } else {
      // Simulating API call (use your actual API call here)
      const result = await registerApi(userData);
      if (result.status === 201) {
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          college: "",
          batch: "",
          year: "",
          phonenumber: "",
        });
        toast.success(`${userData.firstname} successfully registered`);
        navigate('/login'); // Redirect to login page
      } else if (result.status === 400) {
        toast.error(result.response.data);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const registerApi = async (userData) => {
    // Simulated API request (replace with actual API logic)
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 201 }), 1000);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left Side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </span>
          <span className="font-light text-gray-400 mb-8">
            {isSignUp ? "Sign up to get started with your account" : "Log in to access your account"}
          </span>

          {/* Form Fields */}
          {isSignUp ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div>
                  <span className="mb-2 text-md">First Name</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="firstname"
                    value={userData.firstname}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <span className="mb-2 text-md">Last Name</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="lastname"
                    value={userData.lastname}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div>
                  <span className="mb-2 text-md">College</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="college"
                    value={userData.college}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <span className="mb-2 text-md">Year</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="year"
                    value={userData.year}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div>
                  <span className="mb-2 text-md">Batch</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="batch"
                    value={userData.batch}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <span className="mb-2 text-md">Phone Number</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="phonenumber"
                    value={userData.phonenumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>

          <div className="text-center text-gray-400">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="font-bold text-black cursor-pointer"
                >
                  Log in here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  onClick={toggleForm}
                  className="font-bold text-black cursor-pointer"
                >
                  Sign up here
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/6wVF6eLRWejjepdiEtQ6KoT4gL-Ff5_bQL6pHR73pQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/ZmVzdGxvdS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvdGVjaGZlc3Qy/MDI0c2lnbjY3OHgx/MDAwLmpwZw"
            alt="Decorative"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              "Our team loves using this tool to streamline every new project."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;

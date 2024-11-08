import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div className='flex'>
       <Sidebar/>
       
       

        <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
          {/* Navbar */}
          <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
  <h1>Dashboard</h1>
  <div className='flex items-center space-x-4 mr-5'>
    <img
      src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Replace this with the actual image URL
      alt="Profile"
      className='w-10 h-10 rounded-full'  // Adds 20px space to the right of the profile picture
    />
    <button className='text-2xl text-dark '>
      Dark
    </button>
  </div>
</div>


          {/* Navbar end */}

          {/* Dashboard */}
          <div className='grow p-8'>
            <h2 className='text-2xl mb-4'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
              <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-2'>Orders</h3>
                <p className='text-2xl'>{140}</p>
              </div>
              <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-2'>Products</h3>
                <p className='text-2xl'>{120}</p>
              </div>
              <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-2'>Users</h3>
                <p className='text-2xl'>{30}</p>
              </div>
              <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-2'>Settings</h3>
                <p className='text-2xl'>{11}</p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                {/* <Line data={dataLine} /> */}
              </div>
              <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                {/* <Bar data={dataBar} /> */}
              </div>
            </div>
          </div>
          {/* Dashboard end */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

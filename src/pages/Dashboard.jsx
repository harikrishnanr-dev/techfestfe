import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import UsersTable from '../components/Users';
import ParticipantsTable from '../components/Participants';
import EventTable from '../components/Table';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Sidebar onTabChange={handleTabChange} />

      <div className="grow ml-16 md:ml-64 h-full bg-gray-100 dark:bg-gray-900">
        {/* Sticky Navbar */}
        <div className="bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white sticky top-0 z-10">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="flex items-center space-x-4 mr-5">
            <img
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button className="text-2xl text-dark">Dark</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
          {activeTab === 'dashboard' && (
            <>
              <h2 className="text-2xl mb-4">Dashboard</h2>

              {/* Dashboard Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Total Users */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                  <p className="text-2xl font-bold text-gray-900">320</p>
                </div>

                {/* Total Events */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700">Total Events</h3>
                  <p className="text-2xl font-bold text-gray-900">15</p>
                </div>

                {/* Total Participants */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700">Total Participants</h3>
                  <p className="text-2xl font-bold text-gray-900">210</p>
                </div>

                {/* Pending Participants */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700">Pending Participants</h3>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 'users' && <UsersTable />}
          {activeTab === 'participants' && <ParticipantsTable/>}
          {activeTab === 'events' && <EventTable />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

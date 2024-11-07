import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return <>
    <section className="flex gap-6">
      <div className="bg-[#03022f] min-h-screen w-72 text-gray-100 px-4">

        <div className="py-3 flex justify-end">
          <FontAwesomeIcon icon={faBars} size={26} />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <Link to={'/'}>
            <h2>Dashboard</h2>
          </Link>
          <Link to={'/'}>
            <h2>Dashboard</h2>
          </Link>
          <Link to={'/'}>
            <h2>Dashboard</h2>
          </Link>
          <Link to={'/'}>
            <h2>Dashboard</h2>
          </Link>
          <Link to={'/'}>
            <h2>Dashboard</h2>
          </Link>
        </div>
      </div>
      <div className="m-3 text-xl text-blue-400 font-semibold">
        Admin DashBoard
      </div>
  </section>
  
  
  
  
  </>;
}

export default Dashboard;

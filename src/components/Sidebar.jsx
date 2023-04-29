import React from "react";
import { Link } from "react-router-dom";
import house from '../assets/house.png'
import trip from '../assets/trip.png';
import driver from '../assets/driver.png';
import employee from '../assets/employee.png';

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <ul>
        <li className="mb-4">
          <Link to="/">
            <img src={house} alt="Home" className="h-6 mr-2 inline" />
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/trips">
            <img src={trip} alt="Trips" className="h-6 mr-2 inline" />
            Trip Management
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/drivers">
            <img src={driver} alt="Drivers" className="h-6 mr-2 inline" />
            Driver Management
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/employees">
            <img src={employee} alt="Employees" className="h-6 mr-2 inline" />
            Employee Management
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar

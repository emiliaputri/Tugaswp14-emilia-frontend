import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaUserPlus, FaHandsHelping, FaSearch, FaChartBar  } from 'react-icons/fa'; // Import ikon dari React Icons

function Navbar() {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-extrabold text-2xl tracking-wide">
  <h2 className="uppercase bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-transparent bg-clip-text">
    siPena 
  </h2>
</div>

<div className="flex space-x-4">
  <Link to="/" className="text-white hover:text-gray-300 flex items-center space-x-2">
    <FaHome /> {/* Ikon untuk Home */}
    <span>Home</span>
  </Link>
  <Link to="/Pengabdian" className="text-white hover:text-gray-300 flex items-center space-x-2">
      <FaHandsHelping /> {/* Ikon untuk Pengabdian */}
      <span>Pengabdian</span>
  </Link>
  <Link to="/penelitian" className="text-white hover:text-gray-300 flex items-center space-x-2">
    <FaBook /> {/* Ikon untuk Penelitian */}
    <span>Penelitian</span>
  </Link>
</div>
      </div>
    </nav>
  );
}

export default Navbar;

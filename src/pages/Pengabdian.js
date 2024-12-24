import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaSearch, FaChartBar } from 'react-icons/fa';

function Pengabdian() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Program Pengabdian Masyarakat
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Berkontribusi langsung dalam pembangunan masyarakat dengan program yang inovatif dan berdampak.
        </p>
        
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-white py-6 text-white text-4xl p-6 flex justify-center">
              <FaHandsHelping />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Kolaborasi</h3>
              <p className="text-gray-600">
                Jalin kerjasama dengan berbagai komunitas dan organisasi untuk pengabdian yang lebih luas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-white py-6 text-white text-4xl p-6 flex justify-center">
              <FaSearch />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Penelitian Terkait</h3>
              <p className="text-gray-600">
                Gunakan hasil penelitian terbaru untuk mendukung program pengabdian yang lebih efektif.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-white py-6 text-white text-4xl p-6 flex justify-center">
              <FaChartBar />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Monitoring & Evaluasi</h3>
              <p className="text-gray-600">
                Pantau progres dan evaluasi keberhasilan program dengan laporan yang detail.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12">
        <Link to="/ProgramPengabdian">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300">
            Mulai Program Pengabdian
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pengabdian;

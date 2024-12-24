import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di Sistem Penelitian & Pengabdian
          </h1>
          <p className="text-lg mb-6">
            Platform untuk mendukung penelitian dan pengabdian masyarakat yang inovatif dan berkelanjutan.
          </p>
          <Link to="/Pengabdian">
          <button className="bg-blue-600 text-white-800 font-bold px-6 py-3 rounded shadow hover:bg-blue-700 transition duration-300">
            Mulai Sekarang
          </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">
            Fitur Unggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Penelitian</h3>
              <p>
                Kelola dan dokumentasikan penelitian Anda dengan mudah melalui platform kami.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Pengabdian</h3>
              <p>
                Lakukan program pengabdian masyarakat dengan terstruktur dan efisien.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Laporan & Statistik</h3>
              <p>
                Pantau progres penelitian dan pengabdian melalui laporan yang detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">
            Siap Memulai Penelitian Baru?
          </h2>
          <p className="mb-6">
            Bergabunglah dengan kami untuk berkontribusi dalam kemajuan ilmu pengetahuan dan masyarakat.
          </p>
          <Link to="/Daftar">
          <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded shadow hover:bg-blue-700 transition duration-300">
            Daftar Sekarang
          </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>
            © {new Date().getFullYear()} siPena. Universitas Binaniaga Indonesia.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

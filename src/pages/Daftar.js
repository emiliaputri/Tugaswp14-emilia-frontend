import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Daftar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // Inisialisasi navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
    setTimeout(() => {
      alert(`Pendaftaran berhasil!\nNama: ${name}\nEmail: ${email}`);
      setIsSubmitting(false);
      setName('emilia');
      setEmail('');
      setPassword('12345');
      
      // Arahkan pengguna ke halaman Penelitian
      navigate('/penelitian');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-gray-500 to-indigo-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Daftar Sekarang
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Bergabunglah dengan kami untuk memulai penelitian dan pengabdian yang lebih baik.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSubmitting ? 'Mendaftar...' : 'Daftar Sekarang'}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Sudah memiliki akun?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
}

export default Daftar;

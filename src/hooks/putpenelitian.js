// src/Component/hooks/usePutImage.js
import { useState } from 'react';
import api from '../services/api';
import endpoints from '../services/endpoints';

/**
 * usePutImage adalah custom hook yang digunakan untuk memperbarui data gambar di backend.
 * @returns { Object } - Mengembalikan fungsi putImage, serta status loading dan error.
 */
const usePutPenelitian = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fungsi untuk mengupdate data ke backend.
   * @param { integer } kd_penelitian - kd_penelitian.
   * @param { string } judul - judul.
   * @param { string } lokasi - lokasi.
   * @param { string } thn_akademik - thn_akademik.
   * @param { string } tanggal - tanggal
   * @param { string } status - status.
   * @returns { Promise<Object> } - Mengembalikan data respons dari backend atau error.
   */
  const putPenelitian = async (id, kd_penelitian, judul, lokasi, thn_akademik, tanggal, status) => {
    setLoading(true);
    setError(null);

    try {
      // Membuat objek data untuk dikirim
      const data = {
        kd_penelitian, 
        judul, 
        lokasi, 
        thn_akademik, 
        tanggal, 
        status
      };

      // Defensive check untuk memastikan endpoints.gambar.update terdefinisi
      if (!endpoints.penelitian || typeof endpoints.penelitian.update !== 'function') {
        throw new Error('endpoints.penelitian.update is not defined');
      }

      // Mengirim PUT request ke endpoint yang sesuai
      const response = await api.put(endpoints.penelitian.update(id), data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Mengembalikan data respons jika berhasil
      return response.data;
    } catch (err) {
      console.error('Error updating penelitian:', err);
      // Mengambil pesan error dari respons jika tersedia
      setError(err.response?.data?.error || err.message || 'Terjadi kesalahan saat memperbarui data.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { putPenelitian, loading, error };
};

export default usePutPenelitian;
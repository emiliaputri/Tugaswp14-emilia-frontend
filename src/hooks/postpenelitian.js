import { useState } from 'react';
import api from '../services/api'; // Pastikan path ini benar sesuai struktur proyek Anda
import endpoints from '../services/endpoints';

/**
 * usePostVideo adalah custom hook yang digunakan untuk mengirim data video ke backend.
 * @returns { Object } - Mengembalikan fungsi postVideo, serta status loading dan error.
 */
const usePostpenelitian = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fungsi untuk mengirim data video ke backend.
   * @param { integer } kd_penelitian - kd_penelitian.
   * @param { string } judul - judul.
   * @param { string } lokasi - lokasi.
   * @param { string } thn_akademik - thn_akademik.
   * @param { string } tanggal - tanggal
   * @param { string } status - status.
   * @returns { Promise<Object> } - Mengembalikan data respons dari backend atau error.
   */
  const postpenelitian = async (kd_penelitian, judul, lokasi, thn_akademik, tanggal, status) => {
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

      // Mengirim POST request ke endpoint yang sesuai
      const response = await api.post(endpoints.penelitian.create, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Mengembalikan data respons jika berhasil
      return response.data;
    } catch (err) {
      console.error('Error uploading:', err);
      // Mengambil pesan error dari respons jika tersedia
      setError(err.response?.data?.error || 'Terjadi kesalahan saat mengupload.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { postpenelitian, loading, error };
};

export default usePostpenelitian;
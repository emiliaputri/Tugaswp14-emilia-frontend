import React from 'react';
import { FaUsers, FaSearch, FaClipboardCheck, FaChartLine } from 'react-icons/fa';

function PengabdianPage() {
  const sections = [
    {
      icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
      title: "Kolaborasi",
      description: "Bangun sinergi dengan berbagai pihak untuk mencapai hasil maksimal.",
      articles: [
        { title: "Strategi Kolaborasi Efektif", description: "Tips dan trik membangun kerja sama yang produktif." },
        { title: "Mengapa Kolaborasi Itu Penting?", description: "Manfaat kolaborasi dalam program pengabdian masyarakat." },
      ],
    },
    {
      icon: <FaSearch className="text-green-500 text-4xl mb-4" />,
      title: "Penelitian Terkait",
      description: "Temukan penelitian relevan yang dapat mendukung program Anda.",
      articles: [
        { title: "Panduan Penelitian Terkait", description: "Langkah-langkah menemukan penelitian yang relevan." },
        { title: "Penelitian Pendukung Pengabdian", description: "Studi kasus penelitian yang mendukung program pengabdian." },
      ],
    },
    {
      icon: <FaClipboardCheck className="text-yellow-500 text-4xl mb-4" />,
      title: "Monitoring",
      description: "Pantau perkembangan program Anda secara berkala.",
      articles: [
        { title: "Teknik Monitoring Proyek", description: "Cara efektif untuk memantau progres program." },
        { title: "Alat Monitoring Digital", description: "Review aplikasi untuk memantau program pengabdian." },
      ],
    },
    {
      icon: <FaChartLine className="text-purple-500 text-4xl mb-4" />,
      title: "Evaluasi",
      description: "Analisis hasil untuk perbaikan program di masa depan.",
      articles: [
        { title: "Langkah-Langkah Evaluasi", description: "Panduan melakukan evaluasi program." },
        { title: "Meningkatkan Dampak Program", description: "Cara mengevaluasi dampak program terhadap masyarakat." },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-500 via-green-400 to-purple-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold uppercase">Mulai Program Pengabdian</h1>
          <p className="text-lg mt-2">Kolaborasi untuk Masyarakat yang Lebih Baik</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center">{section.icon}</div>
              <h2 className="text-xl font-semibold text-center mt-4 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 text-center mb-4">
                {section.description}
              </p>
              <div className="mt-4">
                {section.articles.map((article, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-lg font-bold">{article.title}</h3>
                    <p className="text-gray-500">{article.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PengabdianPage;

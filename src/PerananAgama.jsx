// src/pages/Islam/PerananAgama.jsx
import React from 'react';

const PerananAgama = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">PERANAN AGAMA DALAM KEHIDUPAN</h1>
        <p className="text-gray-600">Materi Pendidikan Agama Islam</p>
      </header>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Pendahuluan */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">PENDAHULUAN</h2>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-xl font-medium mb-2">Latar Belakang</h3>
            <p className="text-gray-700">
              Agama telah menjadi bagian tak terpisahkan dalam kehidupan manusia sejak zaman dahulu. 
              Dalam berbagai peradaban, agama berperan sebagai pedoman yang memberikan nilai-nilai etika 
              dan membentuk norma dalam masyarakat. Kata "agama" berasal dari bahasa Sansekerta "a" (tidak) 
              dan "gama" (berubah), yang berarti tidak berubah atau tetap.
            </p>
          </div>
        </section>

        {/* Pengertian Agama */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">PENGERTIAN AGAMA</h2>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h3 className="text-xl font-medium mb-2">Menurut Tokoh Ahli</h3>
            <p className="text-gray-700 mb-2">
              <strong>Clifford Geertz</strong> mendefinisikan agama sebagai sistem simbol yang membangun 
              suasana hati dan motivasi yang kuat dalam diri manusia.
            </p>
            <p className="text-gray-700">
              <strong>Max Weber</strong> menyatakan agama adalah sistem keyakinan yang membantu 
              masyarakat memberi makna terhadap kehidupan.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-xl font-medium mb-2">Menurut Pemuka Agama</h3>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-2">
              "Agama adalah nasihat." (HR. Muslim No. 55)
            </blockquote>
            <p className="text-gray-700">
              Dr. Zakir Naik menyederhanakannya sebagai "Islam adalah cara hidup yang lengkap" 
              (a complete way of life).
            </p>
          </div>
        </section>

        {/* Peranan Agama */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">PERANAN AGAMA DALAM KEHIDUPAN</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-medium mb-2">1. Penjaga Moral dan Etika</h3>
              <p className="text-gray-700 mb-3">
                Agama memberikan pedoman tentang baik dan buruk melalui:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>QS. An-Nahl: 90 - Perintah berbuat adil dan kebajikan</li>
                <li>QS. Al-Baqarah: 83 - Perintah berbuat baik kepada orang tua dan sesama</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-medium mb-2">2. Pemberi Ketenangan Batin</h3>
              <p className="text-gray-700 mb-3">
                Agama mengajarkan untuk menjauhi syirik dan hawa nafsu:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>QS. An-Nisa: 48 - Larangan syirik</li>
                <li>QS. Al-Kahf: 28 - Larangan mengikuti hawa nafsu</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-medium mb-2">3. Penyedia Solusi Masalah Hidup</h3>
              <p className="text-gray-700 mb-3">
                Islam memberikan solusi untuk berbagai masalah:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>QS. Yusuf: 53 - Mengendalikan nafsu</li>
                <li>QS. At-Thalaq: 2-3 - Jaminan rezeki bagi yang bertakwa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Islam sebagai Agama Penyempurna */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">ISLAM SEBAGAI AGAMA PENYEMPURNA</h2>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h3 className="text-xl font-medium mb-2">Pengertian Islam</h3>
            <p className="text-gray-700">
              Islam adalah agama yang diturunkan Allah SWT kepada Nabi Muhammad SAW sebagai penyempurna 
              agama-agama sebelumnya, mencakup semua aspek kehidupan.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h3 className="text-xl font-medium mb-2">Sumber Hukum Islam</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>Al-Quran:</strong> Wahyu Allah yang utama</li>
              <li><strong>Hadits:</strong> Perkataan dan perbuatan Nabi</li>
              <li><strong>Ijma':</strong> Konsensus ulama</li>
              <li><strong>Qiyas:</strong> Analogi hukum</li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-xl font-medium mb-2">Prinsip Dasar Islam</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hubungan dengan Allah (Hablumminallah)</li>
              <li>Hubungan dengan sesama manusia (Hablumminannas)</li>
              <li>Hubungan dengan alam</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <p><strong>Referensi:</strong></p>
          <ul className="list-disc pl-6 mt-2">
            <li>Al-Quran dan Hadits</li>
            <li>Geertz, C. (2013). Religion as a cultural system</li>
            <li>Weber, M. (2013). The Protestant ethic</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default PerananAgama;
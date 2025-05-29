import { BookOpenText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Link Instagram ALTICS UNSIKA
  const instagramUrl = "https://www.instagram.com/altics_unsika?igsh=MWczcjhkOWRoYzRp";

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t py-6">
      <div className="container mx-auto px-4">
        {/* Logo dan Nama */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 text-primary mb-2">
            <BookOpenText className="h-6 w-6" />
            <span className="text-xl font-bold">BANI UNSIKA</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Kelompok 1 Agama 2A Informatika 2025
          </p>
        </div>

        {/* Navigasi Sederhana */}
        <nav className="flex justify-center flex-wrap gap-4 mb-6">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-300 text-sm"
          >
            Beranda
          </Link>
          <Link 
            to="/anggota" 
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-300 text-sm"
          >
            Anggota
          </Link>
          <Link 
            to="/materi" 
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-300 text-sm"
          >
            Materi
          </Link>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-300 text-sm"
          >
            Kontak
          </a>
        </nav>

        {/* Info Kontak Lain */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-4">
          <p>Email: bani@unsika.ac.id | Telp: (0267) 1234567</p>
          <p>Gedung Fakultas Ilmu Komputer UNSIKA, Karawang</p>
        </div>

        {/* Hak Cipta */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          © 2025 BANI UNSIKA - Kelompok 1 Agama. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
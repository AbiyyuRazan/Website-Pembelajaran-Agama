import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import MembersPage from '@/pages/MembersPage';
import MaterialsPage from '@/pages/MaterialsPage';
import PerananAgama from './pages/Islam/PerananAgama'; // ← import halaman baru

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="anggota" element={<MembersPage />} />
          <Route path="materi" element={<MaterialsPage />} />
          <Route path="islam/peranan-agama" element={<PerananAgama />} /> {/* Tambahan route baru */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <p className="text-2xl text-muted-foreground mb-8">Oops! Halaman tidak ditemukan.</p>
              <a href="/" className="text-primary hover:underline">Kembali ke Beranda</a>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import ProfilPengguna from './components/ProfilPengguna';
import Pengumuman from './components/Pengumuman';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Tim Kami</h1>

      <Pengumuman
        judul="Perhatian!"
        isi="Ini adalah nama-nama dan hobi teman-teman Ainnunnissa Soraya."
      />

      <div className="container">
        <ProfilPengguna
          gambar="NissaS.jpg"
          nama="Ainnunissa Soraya"
          hobi="Berenang dan Fotografi"
        />
        <ProfilPengguna
          gambar="Hag.jpg"
          nama="Harri Agung Gumilang"
          hobi="Menyanyi dan Menari"
        />
        <ProfilPengguna
          gambar="Jagat.jpg"
          nama="Jagat Lingga Erlangga"
          hobi="Fotografi dan Olahraga"
        />
      </div>
    </div>
  );
}

export default App;

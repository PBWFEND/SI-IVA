import React from 'react';
import './ProfilPengguna.css';

function ProfilPengguna({ gambar, nama, hobi }) {
  return (
    <div className="kartu-profil">
      <img src={gambar} alt={nama} className="gambar-profil" />
      <h2>{nama}</h2>
      <p><strong>Hobi:</strong> {hobi}</p>
    </div>
  );
}

export default ProfilPengguna;

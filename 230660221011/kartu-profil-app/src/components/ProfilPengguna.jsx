import React from 'react';
import Card from './Card';
import './ProfilPengguna.css';

function ProfilPengguna({ gambar, nama, pekerjaan }) {
  return (
    <Card>
      <div className="kartu-profil">
        <img className="foto-profil" src={gambar} alt={'Foto ${nama}'} />
        <h3>{nama}</h3>
        <p>{pekerjaan}</p>
      </div>
    </Card>
  );
}

export default ProfilPengguna;
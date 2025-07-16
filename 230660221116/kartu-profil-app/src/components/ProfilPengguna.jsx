// ProfilPengguna.jsx
import React from 'react';
import './ProfilPengguna.css';

function ProfilPengguna({ gambar, nama, hobi }) {
    return (
        <div className="kartu-profil">
            <img src={gambar} alt={`Foto ${nama}`} />
            <h3>{nama}</h3>
            <p><strong>Hobi:</strong> {hobi}</p>
        </div>
    );
}

export default ProfilPengguna;
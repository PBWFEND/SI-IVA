import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './ProfilPengguna.css';

function ProfilPengguna({ gambar, nama, pekerjaan }) {
  return (
    <Card className="profil-pengguna">
      <img
        src={gambar}
        alt={`Foto profil dari ${nama}`}
        className="profil-gambar"
        loading="lazy"
      />
      <h3 className="profil-nama">{nama}</h3>
      <p className="profil-pekerjaan">{pekerjaan}</p>
    </Card>
  );
}

ProfilPengguna.propTypes = {
  gambar: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  pekerjaan: PropTypes.string.isRequired,
};

export default ProfilPengguna;

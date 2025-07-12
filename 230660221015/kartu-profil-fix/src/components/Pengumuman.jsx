import React from 'react';
import Card from './Card';
import './Pengumuman.css';

function Pengumuman({ judul, isi }) {
  return (
    <Card>
      <div className="pengumuman">
        <h3>📢 {judul}</h3>
        <p>{isi}</p>
      </div>
    </Card>
  );
}

export default Pengumuman;

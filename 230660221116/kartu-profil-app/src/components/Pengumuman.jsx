import React from 'react';
import Card from './card';

function Pengumuman({ judul, isi }) {
  return (
    <Card>
      <h3>📢 {judul}</h3>
      <p>{isi}</p>
    </Card>
  );
}

export default Pengumuman;
import React from 'react';
import ProfilPengguna from './components/ProfilPengguna';
import Pengumuman from './components/Pengumuman'; // <-- Impor komponen baru
import { users } from './data/users';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Pengumuman 
        judul="Teman-teman Tira Azzahra"
        isi="Ini adalah nama nama teman Tira Azzahra beserta Hobi nya."
      />
      <hr style={{width: '100%', margin: '40px 0', border: '1px solid #eee'}} />
      <h1>Tim Kami</h1>
      <div className="profil-list">
        {users.map(user => (
          <ProfilPengguna
            key={user.id}
            nama={user.nama}
            pekerjaan={user.pekerjaan}
            gambar={user.gambar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
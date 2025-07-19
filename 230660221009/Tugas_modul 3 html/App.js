import React from 'react';
import ProfilPengguna from './ProfilPengguna';

function App() {
  const pengguna = [
    {
      nama: "Ade Yusup Maulana",
      gambar: "https://www.instagram.com/p/Czqp5x_paPI/?igsh=Yzdpc3EwZmNqZjZt",
      hobi: "Berjualan & Belajar"
    },
    {
      nama: "Cristiano Ronaldo",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWwUkJQb3sQtC0wujJas7A8s699xzFxjt7g&usqp=CAU",
      hobi: "Bermain Bola"
    },
    {
      nama: "Ade Astrid",
      gambar: "https://popnable.com/images/singers/temp/ade_astrid_indonesia_top_100_101.jpg",
      hobi: "Bernyanyi"
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {pengguna.map((p, index) => (
        <ProfilPengguna
          key={index}
          nama={p.nama}
          gambar={p.gambar}
          hobi={p.hobi}
        />
      ))}
    </div>
  );
}

export default App;
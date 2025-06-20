import "./App.css";

// Komponen App utama yang berfungsi sebagai akar dari aplikasi React kita
function App() {
  return (
    // Fragment sebagai pembungkus untuk mengelompokkan beberapa elemen tanpa menambahkan node DOM tambahan
    <>
      {/* Judul utama yang menampilkan nama */}
      <h1 className="title">Hi, I'm Fajar</h1>
      
      {/* Paragraf subjudul dengan pesan selamat datang */}
      <p className="subtitle">Selamat datang di perjalanan belajar React saya!</p>
      
      {/* Paragraf teks utama */}
      <p>
        Saya adalah seorang yang memiliki minat dalam fotografi dan editing.
        Saat ini saya sedang belajar React untuk memperluas kemampuan di bidang teknologi.
      </p>
    </>
  );
}

// Mengekspor komponen App sebagai ekspor default
export default App;

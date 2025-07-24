import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <main className={darkMode ? 'container dark' : 'container'}>
      <section className="intro-card">
        <img
          src="public/profile.jpeg" // Letakkan gambar ini di folder 'public'
          alt="Foto Profil"
          className="profile-pic"
        />
        <h1 className="title">Hello, I'am</h1>
        <h1 className="title">Muhammad Aulia Ramadhani</h1>
        <p className="description">
          Saya seorang <strong>mahasiswa</strong> yang memiliki minat dalam bidang <em>UI/UX Design</em> dan <em>pengembangan aplikasi</em>. Saya senang menciptakan antarmuka yang menarik dan fungsional untuk meningkatkan pengalaman pengguna.
        </p>
        <div className="buttons">
          <a href="auliarama797@gmail.com" className="btn">Hubungi Saya</a>
          <button onClick={toggleMode} className="btn toggle">
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

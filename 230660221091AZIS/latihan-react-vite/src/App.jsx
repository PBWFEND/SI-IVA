import './index.css';

function App() {
  return (
    <div className="main-container">
      <header className="hero-section">
        <div className="text-area">
          <h1>Azis Arrizqi</h1>
          <h2>I’m a <span className="highlight">UI/UX Designer</span></h2>
          <p className="intro">
            I create smooth and modern interfaces with a focus on usability and interaction. I enjoy turning complex ideas into delightful user experiences.
          </p>
          <p className="intro">
            This portfolio reflects my journey in frontend design and development. Let's build something awesome together.
          </p>
          <div className="cta-buttons">
            <button className="btn-download">Download CV</button>
            <button className="btn-projects">My Projects</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="www.instagram/aa_izqi.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="image-area">
          <div className="profile-circle">
            <img src="/profil.png" alt="Azis Arrizqi" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
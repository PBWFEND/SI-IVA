import React from 'react';

function App() {
  return (
    <div className="app-container">
      <div className="background-pattern"></div>
      
      <div className="content-wrapper">
        <header className="header">
          <h1 className="title">
            <span className="title-line">Hello, I'm</span>
            <span className="title-name">Tira Azzahra</span>
          </h1>
          <div className="title-divider"></div>
        </header>

        <div className="profile-section">
          <div className="profile-image-container">
            <div className="image-frame">
              <img 
                src="tira.png" 
                alt="Tira Azzahra" 
                className="profile-image"
              />
            </div>
            <div className="image-overlay"></div>
          </div>
          
          <div className="profile-content">
            <h2 className="subtitle">Information Systems Student</h2>
            <h3 className="role">UI/UX Designer & Frontend Developer</h3>
            
            <div className="bio">
              <p>
                Passionate about creating beautiful digital experiences. 
                Currently studying Information Systems while exploring 
                the world of web development and design.
              </p>
              <p>
                My skills include React, JavaScript, UI/UX design principles, 
                and creating responsive web applications.
              </p>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
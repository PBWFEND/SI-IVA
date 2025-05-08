// script.js

// Smooth scroll untuk navigasi
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Toggle Dark/Light Mode
const toggleBtn = document.getElementById('toggle-mode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

// Form Contact Validasi
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');
    let isValid = true;

    if (!name.value.trim()) {
      alert('Nama wajib diisi.');
      isValid = false;
    } else if (!email.value.includes('@')) {
      alert('Email tidak valid.');
      isValid = false;
    } else if (!message.value.trim()) {
      alert('Pesan tidak boleh kosong.');
      isValid = false;
    }

    if (!isValid) e.preventDefault();
  });
}

// Loading Animation saat pergantian halaman
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Filter Kategori Portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    projects.forEach(project => {
      project.style.display =
        category === 'all' || project.classList.contains(category) ? 'block' : 'none';
    });
  });
});

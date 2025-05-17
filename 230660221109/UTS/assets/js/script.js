document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a.nav-item');
  const sections = document.querySelectorAll('section.content-section');
  const modeToggleBtn = document.getElementById('mode-toggle');
  const body = document.body;
  const menuBtn = document.getElementById('menu-btn');
  const navLinksContainer = document.getElementById('nav-links');

  // Toggle responsive menu on small screens
  menuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });

  // Navigasi: klik link -> scroll smooth + update active + show section
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Smooth scroll ke section
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Tutup menu (jika terbuka)
      if(navLinksContainer.classList.contains('active')){
        navLinksContainer.classList.remove('active');
      }

      // Update active class nav
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');

      // Show/hide section
      sections.forEach(section => {
        section.classList.remove('active');
        if(section.id === targetId) section.classList.add('active');
      });
    });
  });

  // Highlight nav item on scroll + show section sesuai posisi scroll
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
      if(scrollPos >= section.offsetTop - 60 && scrollPos < section.offsetTop + section.offsetHeight - 60){
        const id = section.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if(link.getAttribute('href').substring(1) === id){
            link.classList.add('active');
          }
        });

        sections.forEach(s => s.classList.remove('active'));
        section.classList.add('active');
      }
    });
  });

  // Dark/Light Mode Toggle + localStorage
  function setMode(mode) {
    if(mode === 'light'){
      body.classList.add('light-mode');
      modeToggleBtn.textContent = '🌙';
      localStorage.setItem('mode', 'light');
    } else {
      body.classList.remove('light-mode');
      modeToggleBtn.textContent = '☀️';
      localStorage.setItem('mode', 'dark');
    }
  }

  // Initial mode setup
  const savedMode = localStorage.getItem('mode') || 'dark';
  setMode(savedMode);

  modeToggleBtn.addEventListener('click', () => {
    if(body.classList.contains('light-mode')){
      setMode('dark');
    } else {
      setMode('light');
    }
  });

  // Animate skill bars
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(el => {
    const level = el.getAttribute('data-level');
    setTimeout(() => {
      el.style.width = level + '%';
    }, 300);
  });

  // Form validation
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(contactForm.checkValidity()){
      formMessage.style.color = 'green';
      formMessage.textContent = 'Terima kasih sudah menghubungi saya!';
      contactForm.reset();
    } else {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Mohon isi semua field dengan benar.';
    }
  });

  // Optional: music toggle simulation (jika ada)
  const musicToggleBtn = document.getElementById('music-toggle');
  if(musicToggleBtn){
    let isPlaying = true;
    musicToggleBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      musicToggleBtn.textContent = isPlaying ? "⏸️" : "▶️";
    });
  }
});
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section.content-section, section.education-section');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href').substring(1);

    // Remove active dari semua nav-item & section
    navItems.forEach(i => i.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Tambahkan active ke nav-item yang diklik
    item.classList.add('active');

    // Tambahkan active ke section yang sesuai
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('main > section');
  const loading = document.getElementById('loading');

  navItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault(); // cegah reload halaman

      const targetId = item.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;

      // Tampilkan loading spinner
      loading.style.display = 'flex';

      // Sembunyikan semua section dan nonaktifkan nav
      sections.forEach(s => s.classList.remove('active'));
      navItems.forEach(i => i.classList.remove('active'));

      // Delay 1 detik, baru tampilkan section target dan aktifkan nav item
      setTimeout(() => {
        loading.style.display = 'none';
        targetSection.classList.add('active');
        item.classList.add('active');
      }, 1000);
    });
  });

  // Tampilkan section pertama saat awal (misal Home)
  sections.forEach(s => s.classList.remove('active'));
  if (sections.length > 0) {
    sections[0].classList.add('active');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const texts = [
    "Kreator Visual.",
    "Fotografi dan Editing Video.",
    "Pecinta Musik & Film.",
    "Pembuat Animasi Interaktif."
  ];

  const typingText = document.getElementById('typing-text');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      // selesai ketik, tunggu lalu hapus
      speed = 1500; // jeda sebelum hapus
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // selesai hapus, lanjut ke kalimat berikutnya
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500; // jeda sebelum mulai ketik
    } else {
      speed = isDeleting ? 50 : 100;
    }

    setTimeout(type, speed);
  }

  type();
});

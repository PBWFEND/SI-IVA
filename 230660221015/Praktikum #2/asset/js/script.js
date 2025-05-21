// Loading Animation
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1000);
});

// Dark/Light Mode Toggle - Fixed Version
document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('#theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (currentTheme === 'light-mode') {
    document.body.classList.add('light-mode');
    toggleSwitch.checked = true;
  } else {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = false;
  }

  // Switch theme function
  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('theme', 'light-mode');
    } else {
      document.body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    }
  }

  // Event listener
  toggleSwitch.addEventListener('change', switchTheme);
  
  // Initialize if no theme set
  if (!currentTheme) {
    localStorage.setItem('theme', 'dark-mode');
  }
});

// Typewriter Effect
const texts = [
  "PHOTOGRAPHER",
  "VIDEOGRAPHER",
  "DESIGNER",
  "EDITOR"
];

let speed = 100;
const textElement = document.querySelector('.typewriter-text');
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    characterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let isValid = true;
  
  // Validate Name
  const name = document.getElementById('name');
  if (name.value.trim() === '') {
    name.classList.add('is-invalid');
    isValid = false;
  } else {
    name.classList.remove('is-invalid');
  }
  
  // Validate Email
  const email = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    email.classList.add('is-invalid');
    isValid = false;
  } else {
    email.classList.remove('is-invalid');
  }
  
  // Validate Message
  const message = document.getElementById('message');
  if (message.value.trim() === '') {
    message.classList.add('is-invalid');
    isValid = false;
  } else {
    message.classList.remove('is-invalid');
  }
  
  if (isValid) {
    // Form submission would go here
    alert('Message sent successfully!');
    contactForm.reset();
  }
});

// Initialize AOS Animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-container form');
  const searchInput = document.querySelector('.search-input');
  
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    
    // Implement your search logic here
    alert('Searching for: ' + searchTerm);
    console.log('Search term:', searchTerm);
    
    // Contoh: Anda bisa menambahkan logika pencarian proyek/skill
    // searchProjects(searchTerm);
  });
});

// Contoh fungsi pencarian proyek
function searchProjects(term) {
  const projects = document.querySelectorAll('.project-item');
  
  projects.forEach(project => {
    const title = project.querySelector('h3').textContent.toLowerCase();
    if (title.includes(term)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
// Hire Form Submission
document.getElementById('hireForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('hireName').value;
  const email = document.getElementById('hireEmail').value;
  const project = document.getElementById('hireProject').value;
  const message = document.getElementById('hireMessage').value;
  
  // Validasi sederhana
  if (!name || !email || !project || project === "Pilih Jenis Proyek") {
    alert('Harap isi semua field yang diperlukan');
    return;
  }
  
  // Simpan data atau kirim ke server
  console.log('Hire Request:', { name, email, project, message });
  
  // Tampilkan notifikasi
  alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');
  
  // Tutup modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('hireModal'));
  modal.hide();
  
  // Reset form
  this.reset();
});
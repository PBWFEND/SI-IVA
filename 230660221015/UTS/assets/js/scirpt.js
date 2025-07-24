// Responsive nav
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Lightbox
function openLightbox(el) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = el.src;
  lightbox.style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Filter portfolio
function filterProjects(category) {
  const items = document.querySelectorAll(".portfolio-grid .item");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// Filter Category
function filterCategory(category) {
  const items = document.querySelectorAll('.portfolio-item');
  
  if (category === 'all') {
    items.forEach(item => item.style.display = 'block');
  } else {
    items.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

// Lightbox Functions
function openLightbox(image) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = image.src;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Harap isi semua field!';
    status.style.color = 'red';
  } else {
    status.textContent = 'Pesan berhasil dikirim!';
    status.style.color = 'green';
    form.reset();
  }
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500); // waktu fade-out
});

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px"; // sembunyikan
  }
  prevScrollpos = currentScrollPos;
};


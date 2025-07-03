// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

// Preloader Hide After Page Load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    e.preventDefault();
  }
});

const slideElements = document.querySelectorAll('.slide-up');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      slideObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

slideElements.forEach((el) => {
  slideObserver.observe(el);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = e.target.getAttribute('data-section');
    const section = document.getElementById(targetId);
    
    // Reset animasi
    section.classList.remove('show');
    void section.offsetWidth; 
    section.classList.add('show');
  });
});

// Toggle hamburger menu on click
const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar = document.querySelector(".navbar");

hamburgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Tombol back to top
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

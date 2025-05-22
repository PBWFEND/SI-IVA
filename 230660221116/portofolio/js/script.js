// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Ganti ke Mode Siang"
    : "🌙 Ganti ke Mode Malam";
});

// Scroll-based fade-in
const fadeInElements = document.querySelectorAll('.fade-in-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach((el) => {
  observer.observe(el);
});

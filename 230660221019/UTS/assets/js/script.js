// === LOADING SCREEN ===
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const navbar = document.getElementById("navbar");
  const heroSection = document.getElementById("hero");

  // Tampilkan loading screen saat halaman dibuka
  function showLoading() {
    loadingScreen.style.display = "flex";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1500);
  }

  // Restart animasi elemen dengan parameter lengkap agar delay bekerja
  function restartAnimation(element, animationName, duration, timingFunction, delay = "0s") {
    element.style.animation = "none";
    element.offsetHeight; // Reflow
    element.style.animation = `${animationName} ${duration} ${timingFunction} forwards ${delay}`;
  }

  // Tampilkan loading screen saat pertama kali halaman dimuat
  showLoading();

  // Tangani klik menu navbar ke #hero (Beranda)
  navbar.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "A" && target.getAttribute("href") === "#hero") {
      event.preventDefault();
      showLoading();

      setTimeout(() => {
        restartAnimation(heroSection, "fadeIn", "1s", "ease-in-out");

        const heroContent = heroSection.querySelector(".container.hero-content");
        const heroImage = heroSection.querySelector(".image img");
        const socialLinks = heroSection.querySelector(".social-links");

        restartAnimation(heroContent, "slideUp", "1s", "ease-out", "0.3s");
        restartAnimation(heroImage, "scaleFade", "1s", "ease-in-out", "0.6s");
        restartAnimation(socialLinks, "fadeIn", "1s", "ease-in-out", "0.9s");

        heroSection.scrollIntoView({ behavior: "smooth" });
      }, 1500);
    }
  });
});

// === THEME TOGGLE (Light/Dark Mode) ===
const modeToggle = document.getElementById("mode-toggle");
const root = document.documentElement;

// Cek tema yang tersimpan di localStorage
const currentTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", currentTheme);
updateToggleText(currentTheme);

// Toggle tema saat diklik
modeToggle.addEventListener("click", () => {
  const newTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateToggleText(newTheme);
});

// Ubah ikon tombol toggle
function updateToggleText(theme) {
  modeToggle.textContent = theme === "light" ? "🌙" : "☀️";
}

// === GALLERY FILTER ===
const filterButtons = document.querySelectorAll(".filter-btns button");
const galleryItems = document.querySelectorAll(".gallery .item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      item.style.display = filter === "all" || item.classList.contains(filter) ? "block" : "none";
    });
  });
});

// === FORM VALIDATION ===
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for your message!");
  this.reset();
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// === LIGHTBOX ===
const lightboxOverlay = document.getElementById("lightbox-overlay");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

// Buka lightbox saat gambar diklik
document.querySelectorAll(".gallery .item img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightboxOverlay.style.display = "flex";
  });
});

// Tutup lightbox
lightboxClose.addEventListener("click", () => {
  lightboxOverlay.style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutLink = document.querySelector('nav a[href="#about"]');
  const aboutGrid = document.querySelector('.about-grid');

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault(); // Cegah scroll default

    // Scroll manual ke section About
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });

    // Hapus dulu class show supaya animasi bisa jalan ulang
    aboutGrid.classList.remove('show');

    // Trigger reflow supaya browser tahu perubahan class
    void aboutGrid.offsetWidth;

    // Tambah class show dengan delay agar animasi jalan
    setTimeout(() => {
      aboutGrid.classList.add('show');
    }, 50);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const aboutLink = document.querySelector('nav a[href="#about"]');
  const aboutGrid = document.querySelector('.about-grid');
  const aboutSection = document.querySelector('#about');

  // Fungsi untuk trigger animasi dengan reset class .show
  function triggerAboutAnimation() {
    // Hapus dulu class .show supaya animasi bisa diulang
    aboutGrid.classList.remove('show');

    // Trigger reflow supaya browser 'ngeh'
    void aboutGrid.offsetWidth;

    // Tambahkan class .show agar animasi berjalan
    setTimeout(() => {
      aboutGrid.classList.add('show');
    }, 50);
  }

  // Handle klik link About
  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    triggerAboutAnimation();
  });

  // Optional: Trigger animasi saat halaman discroll ke section About (misal pakai Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        triggerAboutAnimation();
      }
    });
  }, {
    threshold: 0.5 // trigger saat setengah bagian About muncul di viewport
  });

  observer.observe(aboutSection);
});

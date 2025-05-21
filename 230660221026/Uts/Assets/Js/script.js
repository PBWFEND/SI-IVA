document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan loading screen setelah halaman selesai dimuat
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
    }, 1000);
  });

  // --- Contact Form Submission ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.`);
        contactForm.reset();
      } else {
        alert("Silakan isi semua field!");
      }
    });
  }

  // --- Hire Button Modal & Submission ---
  const hireMeBtn = document.getElementById("hireMeBtn");
  const hireModal = document.getElementById("hireModal");
  const closeModal = document.getElementById("closeModal");
  const hireForm = document.getElementById("hireForm");

  if (hireMeBtn && hireModal) {
    hireMeBtn.addEventListener("click", function () {
      hireModal.classList.remove("hidden");
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", function () {
      hireModal.classList.add("hidden");
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target === hireModal) {
      hireModal.classList.add("hidden");
    }
  });

  if (hireForm) {
    hireForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("hireName").value.trim();
      const email = document.getElementById("hireEmail").value.trim();
      const project = document.getElementById("hireProject").value.trim();

      if (name && email && project) {
        alert(`Terima kasih ${name}! Permintaan Anda untuk proyek "${project}" telah terkirim.`);
        hireForm.reset();
        hireModal.classList.add("hidden");
      } else {
        alert("Silakan isi semua field!");
      }
    });
  }

  // --- Back to Top Button ---
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- Scroll Animations ---
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".slide-up");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.classList.add("slide-up");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run on load

  // --- Dark Mode ---
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.classList.add("dark-mode");
  }

  window.toggleDarkMode = function () {
    const html = document.documentElement;
    html.classList.toggle("dark-mode");
    localStorage.setItem("mode", html.classList.contains("dark-mode") ? "dark" : "light");
  };
});

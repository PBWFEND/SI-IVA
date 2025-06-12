document.addEventListener("DOMContentLoaded", function () {
  // Loading screen
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 1000);
    });
  }

  // Dark Mode toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    // Ambil dari localStorage kalau ada preferensi tema
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setTheme(isDarkMode);

    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      setTheme(isDark);
    });

    function setTheme(isDark) {
      if (isDark) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
      }
    }
  }

  // Form kontak
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
        contactForm.reset();
      } else {
        alert("Silakan isi semua field!");
      }
    });
  }

  // Modal Hire Me
  const hireMeBtn = document.getElementById("hireMeBtn");
  const hireModal = document.getElementById("hireModal");
  const closeModal = document.getElementById("closeModal");
  const hireForm = document.getElementById("hireForm");

  if (hireMeBtn && hireModal) {
    hireMeBtn.addEventListener("click", () => {
      hireModal.classList.remove("hidden");
    });
  }
  if (closeModal && hireModal) {
    closeModal.addEventListener("click", () => {
      hireModal.classList.add("hidden");
    });
  }
  window.addEventListener("click", (event) => {
    if (event.target === hireModal) {
      hireModal.classList.add("hidden");
    }
  });
  if (hireForm) {
    hireForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("hireName").value;
      const email = document.getElementById("hireEmail").value;
      const project = document.getElementById("hireProject").value;
      if (name && email && project) {
        alert(`Terima kasih ${name}! Permintaan Anda untuk proyek ${project} telah terkirim.`);
        hireForm.reset();
        hireModal.classList.add("hidden");
      } else {
        alert("Silakan isi semua field!");
      }
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll animations example
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".slide-up");
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        element.classList.add("slide-up");
      }
    });
  };document.addEventListener("DOMContentLoaded", function () {
  // Loading screen
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 1000);
    });
  }

  // Dark Mode toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    // Ambil dari localStorage kalau ada preferensi tema
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setTheme(isDarkMode);

    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      setTheme(isDark);
    });

    function setTheme(isDark) {
      if (isDark) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
      }
    }
  }

  // Form kontak
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
        contactForm.reset();
      } else {
        alert("Silakan isi semua field!");
      }
    });
  }

  // Modal Hire Me
  const hireMeBtn = document.getElementById("hireMeBtn");
  const hireModal = document.getElementById("hireModal");
  const closeModal = document.getElementById("closeModal");
  const hireForm = document.getElementById("hireForm");

  if (hireMeBtn && hireModal) {
    hireMeBtn.addEventListener("click", () => {
      hireModal.classList.remove("hidden");
    });
  }
  if (closeModal && hireModal) {
    closeModal.addEventListener("click", () => {
      hireModal.classList.add("hidden");
    });
  }
  window.addEventListener("click", (event) => {
    if (event.target === hireModal) {
      hireModal.classList.add("hidden");
    }
  });
  if (hireForm) {
    hireForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("hireName").value;
      const email = document.getElementById("hireEmail").value;
      const project = document.getElementById("hireProject").value;
      if (name && email && project) {
        alert(`Terima kasih ${name}! Permintaan Anda untuk proyek ${project} telah terkirim.`);
        hireForm.reset();
        hireModal.classList.add("hidden");
      } else {
        alert("Silakan isi semua field!");
      }
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll animations example
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
});

  window.addEventListener("scroll", animateOnScroll);
});

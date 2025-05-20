// Menampilkan pesan sambutan
function showWelcomeMessage() {
  alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

function setupDarkModeToggle() {
  const toggleButton = document.getElementById("toggleModeBtn");
  const body = document.body;

  function updateButtonLabel(isDarkMode) {
    toggleButton.innerHTML = isDarkMode ? "🌞 Mode Terang" : "🌙 Mode Gelap";
  }

  const savedMode = localStorage.getItem("mode");
  const isDark = savedMode === "dark";
  if (isDark) {
    body.classList.add("dark-mode");
  }
  updateButtonLabel(isDark);

  toggleButton.addEventListener("click", function () {
    const isNowDark = body.classList.toggle("dark-mode");
    updateButtonLabel(isNowDark);
    localStorage.setItem("mode", isNowDark ? "dark" : "light");
  });
}
// Animasi saat scroll ke elemen
function setupScrollAnimation() {
  const animatedItems = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2 // Muncul saat 20% elemen terlihat
  });

  animatedItems.forEach(item => {
    observer.observe(item);
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman

    // Reset error
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMessage.textContent = "";

    let valid = true;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Nama wajib diisi.";
      nameError.style.display = "block";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Email tidak valid.";
      emailError.style.display = "block";
      valid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Pesan tidak boleh kosong.";
      messageError.style.display = "block";
      valid = false;
    }

    if (valid) {
      successMessage.textContent = "Pesan berhasil dikirim. Terima kasih!";
      form.reset(); // Kosongkan form
    }
  });
}

window.addEventListener("DOMContentLoaded", function () {
  showWelcomeMessage();
  setupDarkModeToggle();
  setupScrollAnimation();
  setupContactForm(); // <- Tambahkan pemanggilan ini
});
// Fungsi untuk menyembunyikan loading screen setelah halaman dimuat
window.addEventListener("load", function() {
  const loadingScreen = document.getElementById("loadingScreen");
  // Delay selama 2 detik (2000 milidetik)
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 2000);
});







script
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }

  script

  /* --- Dark Mode --- */
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.classList.add("dark-mode");
  }

  function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle("dark-mode");
    localStorage.setItem("mode", html.classList.contains("dark-mode") ? "dark" : "light");
  }

  document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Mencegah submit default

      let valid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Reset error
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("messageError").textContent = "";

      // Validasi Nama
      if (name === "") {
        document.getElementById("nameError").textContent = "Nama wajib diisi.";
        valid = false;
      }

      // Validasi Email
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").textContent = "Email tidak valid.";
        valid = false;
      }

      // Validasi Pesan
      if (message.length < 10) {
        document.getElementById("messageError").textContent = "Pesan minimal 10 karakter.";
        valid = false;
      }

      if (valid) {
        alert("Form berhasil dikirim!");
        // Di sini bisa ditambahkan pengiriman ke server
      }
    });
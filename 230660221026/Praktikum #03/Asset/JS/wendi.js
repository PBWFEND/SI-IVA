
    script
        function welcomeMessage() {
            alert("Selamat datang di Portofolio Wendi!");
        }

        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle("dark-mode");

            // Ubah teks tombol berdasarkan mode
            const button = document.querySelector(".toggle-button");
            if (body.classList.contains("dark-mode")) {
                button.textContent = "☀️ Aktifkan Mode Terang";
            } else {
                button.textContent = "🌙 Aktifkan Mode Gelap";
            }
        }
    
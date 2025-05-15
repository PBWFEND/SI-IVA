// Menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

function setupDarkModeToggle() {
    const toggleButton = document.getElementById("toggleModeBtn");
    const body = document.body;

    // Fungsi bantu untuk memperbarui ikon & teks tombol
    function updateButtonLabel(isDarkMode) {
        toggleButton.innerHTML = isDarkMode ? "🌙 Mode Gelap" : "🌞 Mode Terang";
    }

    // Cek preferensi yang disimpan
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
// Panggil fungsi saat halaman selesai dimuat
window.addEventListener("DOMContentLoaded", function () {
    showWelcomeMessage();
    setupDarkModeToggle();
});


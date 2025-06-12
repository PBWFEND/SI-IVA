document.addEventListener('DOMContentLoaded', () => {
    // --- Animasi Loading Page ---
    const loadingOverlay = document.querySelector('.loading-overlay');
    // Sembunyikan loading overlay setelah halaman dimuat sepenuhnya
    window.addEventListener('load', () => {
        setTimeout(() => { // Memberikan sedikit delay agar animasi terlihat
            loadingOverlay.classList.add('hidden');
        }, 500);
    });

    // --- Light/Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Cek preferensi tema yang tersimpan di localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeToggleIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Jika tidak ada di localStorage, cek preferensi sistem
        body.setAttribute('data-theme', 'dark');
        updateThemeToggleIcon('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        updateThemeToggleIcon('light');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateThemeToggleIcon('light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeToggleIcon('dark');
        }
    });

    function updateThemeToggleIcon(theme) {
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Ikon matahari untuk mode gelap
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Ikon bulan untuk mode terang
        }
    }


    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Tampilkan tombol setelah scroll 300px
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animasi scroll halus
        });
    });

    // --- Smooth Scrolling for Navigation Links (opsional, tapi bagus untuk UX) ---
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Sesuaikan dengan tinggi header
                    behavior: 'smooth'
                });
            }
        });
    });
});
// --- Kirim Formulir Kontak ---
const contactForm = document.getElementById('contact-form');
const overlayLoading = document.getElementById('overlay-loading');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Tampilkan overlay loading
        overlayLoading.classList.add('show');

        // Simulasikan pengiriman (ganti dengan fetch/axios kalau backend tersedia)
        setTimeout(() => {
            overlayLoading.classList.remove('show');
            alert('Pesan berhasil dikirim!');
            contactForm.reset();
        }, 2000);
    });
}

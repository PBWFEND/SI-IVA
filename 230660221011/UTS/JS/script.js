// Typewriter Effect
const text = "Portofolio Pribadi";
let i = 0;
const speed = 100;
const titleElement = document.getElementById("judul");

function typeWriter() {
    if (i === 0) titleElement.textContent = ""; // Reset sebelum mulai
    if (i < text.length) {
        titleElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '50px'
});

document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    themeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// === PORTFOLIO POPUP ===
function showPortfolio(category) {
    const images = {
        desain: [
            'Img/tkbg.jpg', 'Img/daftartk.jpg', 'Img/bgwisuda.jpg',
            'Img/KartuNama.jpg', 'Img/NAMECARD-DESAIN.jpg', 'Img/menuramen.jpg',
            'Img/xbannerjdih.jpg', 'Img/xbannerramen.jpg', 'Img/logoBerhanfg.jpg',
            'Img/logoSambal.jpg'],
        editing: [
            'Img/editps.jpg', 'Img/pasfoto.jpg', 'Img/croppolisi.jpg',
            'Img/wsuda.jpg', 'Img/cropsd.jpg', 'Img/cropsma.jpg'],
        photography: [
            'Img/hasil2.jpg', 'Img/hasil3.jpg', 'Img/hasil4.jpg',
            'Img/hasil5.jpg', 'Img/kucing.jpg', 'Img/memoto.jpg',
            'Img/pkl2.jpg', 'Img/PKLCamera.jpg'],
        sertifikat: [
            'Img/BNSP.jpg', 'Img/BNSP2.jpg', 'Img/PiagamIjazah.jpg',
            'Img/WebinarNasional.png', 'Img/CiptaPuisi.jpg', 'Img/pkkmb2023.png',
            'Img/leadcore.png', 'Img/Workshop.png', 'Img/Shortclass.png',
            'Img/SeminarKWU.png', 'Img/unifest.jpg', 'Img/hadiah.png']
    };

    const popup = document.getElementById('portfolio-popup');
    const gallery = document.getElementById('popup-gallery');

    gallery.innerHTML = ''; // Hapus isi sebelumnya

    images[category].slice(0, 13).forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('img-fluid');
        img.style.maxWidth = '250px';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.style.cursor = 'pointer';
        img.style.margin = '10px';
        img.onclick = () => openLightbox(imageSrc);
        gallery.appendChild(img);
    });

    popup.classList.add('show');
}

function closePopup() {
    const popup = document.getElementById('portfolio-popup');
    popup.classList.remove('show');
}

// === LIGHTBOX ===
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.classList.remove("d-none");
    lightbox.classList.add("show");
    document.body.classList.add("lightbox-open");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("show");
    lightbox.classList.add("d-none");
    document.body.classList.remove("lightbox-open");
}

// Achievement Modal
const achievementTriggers = document.querySelectorAll(".achievement-trigger");
const modalTitle = document.getElementById("achievementModalLabel");
const modalDescription = document.getElementById("modal-description");
const modalImg = document.getElementById("modal-img");

achievementTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        modalTitle.textContent = trigger.dataset.title;
        modalDescription.textContent = trigger.dataset.description;
        modalImg.src = trigger.dataset.image;
    });
});

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return alert("Semua kolom harus diisi!");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Masukkan email yang valid!");

    alert("Pesan berhasil dikirim!");
    contactForm.reset();
});

function sendEmail() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return alert("Semua kolom harus diisi!");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Masukkan email yang valid!");

    alert("Pesan berhasil dikirim!");
    contactForm.reset();
}

// Page Load Animation + DOM Events
window.addEventListener("load", () => {
    typeWriter();

    const loader = document.createElement("div");
    loader.className = "page-loading";
    document.body.appendChild(loader);
    setTimeout(() => loader.remove(), 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.querySelector(".lightbox-close");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target.id === "lightbox") {
                closeLightbox();
            }
        });
    }
});


function showHobby(category) {
    const hobbyContent = document.getElementById("hobby-content");

    const hobbyData = {
        fotografi: [
            "Mengambil gambar dengan DSLR",
            "Eksperimen komposisi dan cahaya",
            "Street photography dan potret"
        ],
        desain: [
            "Membuat poster, logo, dan kartu nama",
            "Menggunakan Photoshop & Canva",
            "Eksplorasi palet warna dan tipografi"
        ],
        editing: [
            "Mengedit video vlog & dokumentasi",
            "Transisi, overlay, dan color grading",
            "Menggunakan CapCut dan Premiere Pro"
        ],
        musik: [
            "Mendengarkan genre Lo-Fi, Jazz",
            "Menikmati lirik yang bermakna",
            "Mengkoleksi playlist Spotify"
        ]
    };


    hobbyContent.innerHTML = '';
    hobbyData[category].forEach(item => {
        const p = document.createElement('p');
        p.textContent = `• ${item}`;
        p.style.marginBottom = '8px';
        hobbyContent.appendChild(p);
    });
}
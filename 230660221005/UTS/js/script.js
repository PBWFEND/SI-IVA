 function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}

function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}


// Loading screen
window.addEventListener("load", function () {
  const loading = document.getElementById("loading-screen");
  loading.style.display = "none";
});


// Dark/Light mode toggle
  const toggleButton = document.getElementById('toggleMode');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });



// Tambah loading saat klik menu navigasi
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Tampilkan loading
    const loading = document.getElementById("loading-screen");
    loading.style.display = "flex";

    // Scroll dengan delay (simulasi)
    const targetId = this.getAttribute("href");
    setTimeout(() => {
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      loading.style.display = "none";
    }, 600); // delay animasi 600ms
  });
});





const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠️ Semua field harus diisi!";
    result.innerHTML = ""; // Kosongkan hasil jika gagal
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Pesan berhasil dikirim!";

    // Munculkan hasil input
    result.innerHTML = `
      <div style="margin-bottom: 20px; background-color: #ffe6f2; padding: 15px; border-radius: 10px; box-shadow: 0 0 10px #ffb6c1;">
        <h3>📬 Data Pesan yang Dikirim:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br>${message}</p>
      </div>
    `;

    form.reset();
  }
});

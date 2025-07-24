// Toggle Dark/Light Mode
const toggleModeBtn = document.getElementById('toggle-mode');
const body = document.body;
const header = document.getElementById('header');

function updateThemeIcon() {
  toggleModeBtn.textContent = body.classList.contains('dark') ? "☀️" : "🌙";
}

toggleModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  header.style.backgroundImage = body.classList.contains('dark')
    ? "url('galaxy.jpg')"
    : "url('sunset.jpg')";

  updateThemeIcon();
});

window.addEventListener('DOMContentLoaded', () => {
  header.style.backgroundImage = body.classList.contains('dark')
    ? "url('galaxy.jpg')"
    : "url('sunset.jpg')";
  updateThemeIcon();
  typeWriterEffect();
});

// Animasi isi progress bar saat scroll
const skillSection = document.getElementById("skills");
const skillCards = document.querySelectorAll(".skill-card");

let skillAnimated = false;

function animateSkills() {
  if (skillAnimated) return;

  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionPos < screenHeight - 100) {
    skillCards.forEach(card => {
      const bar = card.querySelector(".progress-bar");
      const percent = card.getAttribute("data-percent");
      bar.style.width = percent + "%";
    });
    skillAnimated = true;
  }
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("DOMContentLoaded", animateSkills);

// Scroll ke atas
const scrollBtn = document.getElementById('scrollTopBtn');
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

// Order Popup
const orderBtn = document.getElementById('orderBtn');
const orderPopup = document.getElementById('orderPopup');
const closeOrder = document.getElementById('closeOrder');

orderBtn.onclick = () => {
  orderPopup.style.display = 'flex';
};

closeOrder.onclick = () => {
  orderPopup.style.display = 'none';
};

window.onclick = e => {
  if (e.target === orderPopup) {
    orderPopup.style.display = 'none';
  }
};

// Portofolio Popup
const portfolioItems = document.querySelectorAll('.portfolio-item img');
const imagePopup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const popupDesc = document.getElementById('popupDesc');
const popupTitle = document.getElementById('popupTitle');
const closePopup = document.getElementById('closePopup');

portfolioItems.forEach(img => {
  img.addEventListener('click', () => {
    const parent = img.closest('.portfolio-item');
    popupImg.src = img.src;
    popupTitle.textContent = parent.getAttribute('data-title');
    popupDesc.textContent = parent.getAttribute('data-desc');
    imagePopup.style.display = 'flex';
  });
});

closePopup.onclick = () => {
  imagePopup.style.display = 'none';
};

window.addEventListener('click', (e) => {
  if (e.target === imagePopup) {
    imagePopup.style.display = 'none';
  }
});

// Filter Portofolio
document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
    });
  });
});

// Efek Typewriter
function typeWriterEffect() {
  const words = ["Creative Web Developer", "UI Designer", "Freelancer"];
  let i = 0, j = 0, currentWord = '', isDeleting = false;
  const subtitle = document.getElementById('typewriter');

  function type() {
    if (i >= words.length) i = 0;
    currentWord = words[i];

    if (!isDeleting) {
      subtitle.textContent = currentWord.substring(0, j++);
      if (j > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
      }
    } else {
      subtitle.textContent = currentWord.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i++;
      }
    }
    setTimeout(type, isDeleting ? 80 : 150);
  }
  type();
}

// ✅ Scroll Tengah Saat Klik Menu
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const rect = target.getBoundingClientRect();
    const offset = window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

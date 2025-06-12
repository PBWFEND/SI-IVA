// Hide the loading screen after the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loading-screen");

  // Add animation fade-out
  loader.classList.add("fade-out");

  // Remove the element after the animation is complete
  setTimeout(() => {
    loader.style.display = "none";
  }, 500); // duration of the animation
});

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

// Hire Button Click Event
const hireMeBtn = document.getElementById("hireMeBtn");
const hireModal = document.getElementById("hireModal");
const closeModal = document.getElementById("closeModal");
const hireForm = document.getElementById("hireForm");

// Event klik pada tombol "Hire Me"
if (hireMeBtn) {
    hireMeBtn.addEventListener("click", function () {
        // Menampilkan modal "Hire Me"
        const bootstrapModal = new bootstrap.Modal(hireModal);
        bootstrapModal.show();
    });
}

// Check if the close button exists before adding the event listener
if (closeModal) {
    closeModal.addEventListener("click", function () {
        const bootstrapModal = new bootstrap.Modal(hireModal);
        bootstrapModal.hide();
    });
}

// Handle hire form submission
if (hireForm) {
    hireForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah halaman ter-refresh

        // Mengambil nilai dari form
        const name = document.getElementById("hireName").value;
        const email = document.getElementById("hireEmail").value;
        const project = document.getElementById("hireProject").value;

        // Validasi input form
        if (name && email && project) {
            alert(`Terima kasih, ${name}! Permintaan untuk proyek "${project}" telah dikirim.`);
            
            // Mengosongkan form setelah submit
            hireForm.reset();

            // Menutup modal setelah submit
            const bootstrapModal = new bootstrap.Modal(hireModal);
            bootstrapModal.hide();
        } else {
            alert("Mohon isi semua kolom.");
        }
    });
}

// Add event listener for clicks outside modal
window.addEventListener("click", function (event) {
    if (event.target === hireModal) {
        hireModal.classList.add("hidden");
    }
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
      contactForm.reset();
    } else {
      alert("Mohon isi semua kolom!");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Back to Top Function
function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/Hide Button on Scroll
window.onscroll = function() {
    const button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

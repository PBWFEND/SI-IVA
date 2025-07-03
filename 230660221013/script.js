// Animasi elemen saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight / 1.2;
        if (top < trigger) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Set style awal untuk animasi
document.querySelectorAll('section').forEach(section => {
    section.style.transition = 'all 0.6s ease-out';
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
});

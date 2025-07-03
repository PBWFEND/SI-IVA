const text = "Portofolio Pribadi";
let i = 0;
const speed = 100;
const titleElement = document.getElementById("judul");

function typeWriter() {
    if (i < text.length) {
        titleElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
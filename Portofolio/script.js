// Mobile menu toggle
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active');
};

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('#theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    themeIcon.classList.remove('bx-sun');
    themeIcon.classList.add('bx-moon');
  } else {
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
  });
});
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

//* darkmode toogle *//
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check mode preference of localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

// Event toggle theme
themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 78,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// microsoft progress circular bar 
let microsoftProgress = document.querySelector(".microsoft"),
  microsoftValue = document.querySelector(".microsoft-progress");

let microsoftStartValue = 0,
  microsoftEndValue = 88,
  microsoftspeed = 30;

let progressmicrosoft = setInterval(() => {
  microsoftStartValue++;

  microsoftValue.textContent = `${microsoftStartValue}%`;
  microsoftProgress.style.background = `conic-gradient(#20c997 ${
    microsoftStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (microsoftStartValue == microsoftEndValue) {
    clearInterval(progressmicrosoft);
  }
}, microsoftspeed);

// Cisco progress circular bar 
let ciscoProgress = document.querySelector(".cisco"),
  ciscoValue = document.querySelector(".cisco-progress");

let ciscoStartValue = 0,
  ciscoEndValue = 85,
  ciscospeed = 30;

let progresscisco = setInterval(() => {
  ciscoStartValue++;

  ciscoValue.textContent = `${ciscoStartValue}%`;
  ciscoProgress.style.background = `conic-gradient(#3f396d ${
    ciscoStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (ciscoStartValue == ciscoEndValue) {
    clearInterval(progresscisco);
  }
}, ciscospeed);

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Hire Button Click Event
const hireMeBtn = document.getElementById("hireMeBtn");

// Contact Form Submission 
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && mobile && message) {
    alert(
      `Thank You ${name}! Your message has been sent. I will contact you shortly via email..`
    );
    contactForm.reset();
  } else {
    alert("Please fill in all fields!");
  }
});


// Add function for Hire Me modal
const hireModal = document.getElementById("hireModal");
const closeModal = document.getElementById("closeModal");
const hireForm = document.getElementById("hireForm");

hireMeBtn.addEventListener("click", function () {
  hireModal.classList.remove("hidden");
});

// Check if the element exists before adding the event listener
if (closeModal) {
    closeModal.addEventListener("click", function () {
        hireModal.classList.add("hidden");
    });
}

// Add event listener for clicks outside modal
window.addEventListener("click", function (event) {
    if (event.target === hireModal) {
        hireModal.classList.add("hidden");
    }
});

// Handle hire form submission
hireForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("hireName").value;
    const email = document.getElementById("hireEmail").value;
    const project = document.getElementById("hireProject").value;
    
    if (name && email && project) {
        alert(`Thank You ${name}! Your request for the project ${project} has been sent.`);
        hireForm.reset();
        hireModal.classList.add("hidden");
    } else {
        alert("Please fill in all fields.");
    }
});
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
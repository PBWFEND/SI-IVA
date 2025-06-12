// Loading screen
window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".container").style.display = "block";
});

// Toggle dark/light mode
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Modal handling
const modal = document.getElementById("order-modal");
const orderBtns = document.querySelectorAll("#order-btn, #order-btn-2");
const closeBtn = document.querySelector(".close");

orderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Form validation
const form = document.getElementById("order-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const [name, email, message] = form.elements;
    if (!name.value || !email.value || !message.value) {
        alert("Please fill all fields!");
    } else {
        alert("Order submitted! Thank you.");
        form.reset();
        modal.style.display = "none";
    }
});

// Portfolio filter
const filters = document.querySelectorAll(".filters span");
const items = document.querySelectorAll(".grid .item");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        document.querySelector(".filters .active").classList.remove("active");
        filter.classList.add("active");
        const category = filter.dataset.filter;
        items.forEach(item => {
            item.style.display = (category === "all" || item.dataset.category === category) ? "block" : "none";
        });
    });
});

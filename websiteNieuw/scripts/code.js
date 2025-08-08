// scripts/code.js

document.addEventListener("DOMContentLoaded", () => {
    // Dropdown functionaliteit
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        dropdown.addEventListener("mouseenter", () => {
            const content = dropdown.querySelector(".dropdown-content");
            if (content) content.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", () => {
            const content = dropdown.querySelector(".dropdown-content");
            if (content) content.style.display = "none";
        });
    }

    // Scroll fade-in effect (optioneel)
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));
});

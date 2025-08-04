// Scroll fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});

// Highlight active nav link
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
});

// Slideshow for kamers
function openSlideshow(kamer) {
    const modal = document.getElementById("slideshow-modal");
    const img = document.getElementById("slideshow-img");
    if (kamer === 1) {
        img.src = "images/images.jpg";
    } else if (kamer === 2) {
        img.src = "images/voeg-hier-kamer2-foto-in.jpg";
    }
    modal.style.display = "flex";
}

function closeSlideshow() {
    document.getElementById("slideshow-modal").style.display = "none";
}

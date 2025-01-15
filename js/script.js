document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-right");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
});


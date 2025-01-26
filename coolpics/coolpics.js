// Toggle the navigation menu visibility on small screens
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu");
    const nav = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
});

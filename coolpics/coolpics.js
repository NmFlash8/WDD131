// Toggle the navigation menu visibility on small screens
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu");
    const nav = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });

    // Handle window resizing
    function handleResize() {
        const menu = document.querySelector("nav ul");
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    // Create the viewer template
    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
                    <button class="close-viewer">X</button>
                    <img src="${pic}" alt="${alt}">
                </div>`;
    }

    // Handle the gallery image click
    function viewHandler(event) {
        const clickedImage = event.target;
        if (clickedImage.tagName === 'IMG') {
            const picSrc = clickedImage.src.split('-')[0] + '-full.jpg';
            const altText = clickedImage.alt;
            const viewerHtml = viewerTemplate(picSrc, altText);
            document.body.insertAdjacentHTML("afterbegin", viewerHtml);

            const closeButton = document.querySelector(".close-viewer");
            closeButton.addEventListener("click", closeViewer);
        }
    }

    // Close the image viewer
    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        viewer.remove();
    }

    // Add event listener for the gallery images
    const gallery = document.querySelector(".gallery");
    gallery.addEventListener("click", viewHandler);
});

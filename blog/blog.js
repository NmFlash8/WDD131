document.addEventListener("DOMContentLoaded", () => {
    // Select the rating element (stars container) and set the stars dynamically
    const ratingElements = document.querySelectorAll('.stars');
    
    ratingElements.forEach(element => {
        const rating = parseInt(element.getAttribute('data-rating'));
        let stars = '';
        
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '★';  // Filled star
            } else {
                stars += '☆';  // Empty star
            }
        }

        element.textContent = stars;  // Set the star rating display
    });
});

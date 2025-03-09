document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();

    document.getElementById("searchBtn").addEventListener("click", () => {
        const query = document.getElementById("searchInput").value.toLowerCase();
        filterRecipes(query);
    });
});

function loadRecipes() {
    import('./recipes.mjs').then(module => {
        const recipes = module.default;
        const recipesContainer = document.getElementById("recipes");

        recipes.forEach(recipe => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");
            card.innerHTML = `
                <h2>${recipe.name}</h2>
                <img src="${recipe.image}" alt="${recipe.name}">
                <p>${recipe.description}</p>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${'⭐'.repeat(recipe.rating)}
                    ${'☆'.repeat(5 - recipe.rating)}
                </span>
            `;
            recipesContainer.appendChild(card);
        });
    });
}

function filterRecipes(query) {
    const cards = document.querySelectorAll(".recipe-card");
    cards.forEach(card => {
        if (card.textContent.toLowerCase().includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

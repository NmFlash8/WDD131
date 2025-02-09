// Example of book data, could be used to dynamically populate content on the page later
const books = [
    {
        title: "Book Title 1",
        author: "Author Name 1",
        review: "This is a review for Book Title 1. It is a great book!",
    },
    {
        title: "Book Title 2",
        author: "Author Name 2",
        review: "This is a review for Book Title 2. It is also a great book!",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    // Example: populate the first article with book data
    const article = document.querySelector("article");
    const title = article.querySelector("h3");
    const author = article.querySelector("p strong");
    const review = article.querySelector("p:last-of-type");

    title.textContent = books[0].title;
    author.textContent = `Author: ${books[0].author}`;
    review.textContent = `Review: ${books[0].review}`;
});

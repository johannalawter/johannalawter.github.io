const articleGrid = document.querySelector(".article-grid");

blogPosts.forEach(function(post) {
const articleCard = document.createElement("article");

articleCard.classList.add("article-card");

articleGrid.appendChild(articleCard);
const articleTitle = document.createElement("h3");

articleTitle.textContent = post.title;

articleCard.appendChild(articleTitle);

const articleCategory = document.createElement("span");

articleCategory.classList.add("post-category");

articleCategory.textContent = post.category;

articleCard.insertBefore(articleCategory, articleTitle);

const articleImage = document.createElement("img");

articleImage.src = post.image;

articleImage.alt = post.title;

articleCard.insertBefore(articleImage, articleCategory);
const articleLink = document.createElement("a");
articleLink.href = post.link;
articleLink.textContent = "Read More";
articleCard.appendChild(articleLink);
articleCard.addEventListener("click", function() {
    window.location.href = post.link;
});
});

blogPosts.forEach(function(post) {
    console.log(post.title);
});

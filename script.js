
/* Blog articles */
const recentPost1 = document.getElementById("recent-post-1");
const recentPost2 = document.getElementById("recent-post-2");

function updateArticle(card, post) {
    card.querySelector("h3").textContent = post.title;
    card.querySelector("img").src = post.image;
    card.querySelector(".post-category").textContent = post.category;
    card.querySelector("a").href = post.link;
}
updateArticle(recentPost1, blogPosts[0]);
updateArticle(recentPost2, blogPosts[1]);
let currentPost1 = 0;
let isPaused1 = false;
let isPaused2 = false;

setInterval(function() {
    if (!isPaused1) {
        currentPost1 = (currentPost1 + 1) % blogPosts.length;

        if (currentPost1 === currentPost2) {
            currentPost1 = (currentPost1 + 1) % blogPosts.length;
        }

        updateArticle(recentPost1, blogPosts[currentPost1]);
    }
}, 5000);
let currentPost2 = 1;

setInterval(function() {
    if (!isPaused2) {
        currentPost2 = (currentPost2 + 1) % blogPosts.length;

        if (currentPost2 === currentPost1) {
            currentPost2 = (currentPost2 + 1) % blogPosts.length;
        }

        updateArticle(recentPost2, blogPosts[currentPost2]);
    }
}, 7000);
recentPost1.addEventListener("mouseenter", function() {
    isPaused1 = true;
});

recentPost1.addEventListener("mouseleave", function() {
    isPaused1 = false;
});

recentPost2.addEventListener("mouseenter", function() {
    isPaused2 = true;
});

recentPost2.addEventListener("mouseleave", function() {
    isPaused2 = false;
});
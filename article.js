const articleTitle = document.querySelector("#article-title");
const articleImage = document.querySelector("#article-image");
const articleContent = document.querySelector("#article-content");
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");
const selectedArticle = blogPosts.find(function(post) {
    return post.id === articleId;
});
if (selectedArticle) {
    articleTitle.textContent = selectedArticle.title;
    articleImage.src = selectedArticle.image;
    articleImage.alt = selectedArticle.title;
    articleContent.textContent = selectedArticle.content;
}
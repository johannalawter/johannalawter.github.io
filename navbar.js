fetch("navbar.html")
 .then(function(response) {
        return response.text();
    })
    .then(function(html) {
    document.querySelector("#navbar-container").innerHTML = html;
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburger-button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})
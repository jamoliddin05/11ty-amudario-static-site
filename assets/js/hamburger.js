document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburger-button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        document.querySelector("main").classList.toggle("overlay");
        document.querySelector(".dropdown-custom").classList.toggle("open");
    })
})
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburger-button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        document.querySelector("main").classList.toggle("overlay");
        document.querySelector(".carousel-caption-custom").classList.toggle("slider-overlay");
        document.querySelector(".carousel-image").classList.toggle("slider-overlay");
    })
})
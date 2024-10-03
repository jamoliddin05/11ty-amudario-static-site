document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown-content");

    document.getElementById("hamburger-button").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        // document.querySelector("main").classList.toggle("overlay");
        document.querySelector(".dropdown-custom").classList.toggle("open");
    })

    dropdown.addEventListener('click', function(event) {
        document.querySelector("header").classList.toggle("open");
        document.querySelector(".dropdown-custom").classList.toggle("open");
    })

    document.addEventListener('click', function(event) {
        // Check if the click is outside the dropdown
        // if (!dropdown.contains(event.target)) {
        //     document.querySelector("header").classList.toggle("open");
        //     document.querySelector(".dropdown-custom").classList.toggle("open");
        // }
    });
})
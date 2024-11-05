document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown-content");

    document.getElementById("hamburger-button").addEventListener("click", function() {
        document.querySelector("header").classList.add("open");
        // document.querySelector(".dropdown-custom").classList.toggle("open");
    })

    dropdown.addEventListener('click', function(event) {
        document.querySelector("header").classList.remove("open");
        // document.querySelector(".dropdown-custom").classList.toggle("open");
    })

    document.addEventListener('click', function(event) {
        if (event.target !== document.getElementById("hamburger-button")) {
            document.querySelector("header").classList.remove("open");
        }
    });
})
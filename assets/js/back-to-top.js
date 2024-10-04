// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when scrolling down 20px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add('active'); // Show the button
    } else {
        backToTopBtn.classList.remove('active'); // Hide the button
    }
}

// Scroll back to the top when the button is clicked
backToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

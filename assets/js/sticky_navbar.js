document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-custom');
    const slider = document.querySelector('#slider');
    const sliderHeight = slider.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > sliderHeight) {
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
        }
    });
});

document.getElementById('product-dropdown').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link
    // You can add additional functionality here, such as toggling a dropdown
});
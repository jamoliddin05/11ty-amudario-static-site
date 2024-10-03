document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-custom');
    const slider = document.querySelector('#product-banner');
    const sliderHeight = slider.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > sliderHeight) {
            navbar.classList.add('transparent');
        } else {
            navbar.classList.remove('transparent');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownLink = document.getElementById('product-dropdown');
    const dropdownWrapper = document.querySelector('.dropdown-product-wrapper');
    const dropDown = document.querySelector('.product-dropdown-menu');

    // Toggle 'active' class when the link is clicked
    dropdownLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownWrapper.classList.toggle('active');
    });

    // Remove 'active' class when clicking outside the dropdown
    document.addEventListener('click', function(event) {
        // Check if the click is outside the dropdown
        if (!dropdownWrapper.contains(event.target)) {
            dropdownWrapper.classList.remove('active');
        }
    });

    dropDown.addEventListener('click', function(event) {
        dropdownWrapper.classList.remove('active');
    });
});
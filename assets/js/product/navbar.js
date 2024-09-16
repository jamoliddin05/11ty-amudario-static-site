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
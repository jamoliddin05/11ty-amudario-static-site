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

document.addEventListener('DOMContentLoaded', function() {
    const dropdownLink = document.getElementById('product-dropdown');
    const languageDropdown = document.getElementById('language-dropdown');
    const dropdownWrapper = document.querySelector('.dropdown-product-wrapper');
    const dropdownLangWrapper = document.querySelector('.dropdown-lang-wrapper');
    const dropDown = document.querySelector('.product-dropdown-menu');
    const dropDownLang = document.querySelector('.lang-dropdown-menu');

    // Toggle 'active' class when the link is clicked
    dropdownLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownWrapper.classList.toggle('active');
    });

    languageDropdown.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownLangWrapper.classList.toggle('active');
    });

    // Remove 'active' class when clicking outside the dropdown
    document.addEventListener('click', function(event) {
        // Check if the click is outside the dropdown
        if (!dropdownWrapper.contains(event.target)) {
            dropdownWrapper.classList.remove('active');
        }
    });

    document.addEventListener('click', function(event) {
        // Check if the click is outside the dropdown
        if (!dropdownLangWrapper.contains(event.target)) {
            dropdownLangWrapper.classList.remove('active');
        }
    });

    dropDown.addEventListener('click', function(event) {
        dropdownWrapper.classList.remove('active');
    });

    dropDownLang.addEventListener('click', function(event) {
        dropDownLang.classList.remove('active');
    });
});
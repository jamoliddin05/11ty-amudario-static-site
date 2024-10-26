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
    const languageDropdown = document.getElementById('language-dropdown');
    const dropdownLangWrapper = document.querySelector('.dropdown-lang-wrapper');
    const dropDownLang = document.querySelector('.lang-dropdown-menu');

    languageDropdown.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownLangWrapper.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        // Check if the click is outside the dropdown
        if (!dropdownLangWrapper.contains(event.target)) {
            dropdownLangWrapper.classList.remove('active');
        }
    });

    dropDownLang.addEventListener('click', function(event) {
        dropDownLang.classList.remove('active');
    });
});
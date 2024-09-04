var elem = document.querySelector('.carousel-bottom');
var flkty = new Flickity( elem, {
    // options
    wrapAround: true,
    freeScroll: true,
    lazyLoad: 4,
    pageDots: false,
    selectedAttraction: 0.1,
    friction: 0.8,
    dragThreshold: 50,
});
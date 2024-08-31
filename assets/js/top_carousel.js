var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    // options
    wrapAround: true,
    lazyLoad: 3,
    pageDots: false,
    selectedAttraction: 0.1,
    friction: 0.8,
    dragThreshold: 50,
});
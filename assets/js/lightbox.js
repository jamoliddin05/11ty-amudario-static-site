// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose = document.getElementById('lightbox-close');
const triggers = document.querySelectorAll('.image-block img');

// Function to open the lightbox
function openLightbox(src) {
    lightbox.style.display = 'flex';
    lightbox.classList.remove('lightbox-close-animation');
    lightboxContent.src = src;
    // Use a timeout to add the animation class after assigning the src
    setTimeout(() => {
        lightboxContent.classList.add('lightbox-animation');
        lightboxClose.classList.add('lightbox-animation');
    }, 10); // Delay for 50 milliseconds (adjust as needed)
}

// Function to close the lightbox
function closeLightbox() {
    setTimeout(() => {
        lightboxContent.classList.remove('lightbox-animation');
    }, 100);
    lightbox.style.display = 'none';
    lightboxContent.src = '';
}

// Attach click event to each image trigger
triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        openLightbox(e.target.src);
    });
});

// Close lightbox when clicking the close button
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

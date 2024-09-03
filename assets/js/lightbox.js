// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose = document.getElementById('lightbox-close');
const triggers = document.querySelectorAll('.lightbox-trigger');

// Function to open the lightbox
function openLightbox(src) {
    lightbox.style.display = 'flex';
    lightboxContent.src = src;
}

// Function to close the lightbox
function closeLightbox() {
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

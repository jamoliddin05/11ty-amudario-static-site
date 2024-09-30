const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addShortcode("getGalleryPaths", function(galleryFolder) {
        // Resolve the full path to the gallery folder
        const fullPath = path.join(__dirname, galleryFolder);

        try {
            // Read the files in the folder and filter by image extensions
            const files = fs.readdirSync(fullPath).filter(file => {
                return [".jpg", ".jpeg", ".png", ".gif"].includes(path.extname(file).toLowerCase());
            });

            // Create an HTML string for each file path
            const galleryHTML = files.map(file => {
                const filePath = path.join(galleryFolder, file).toString();
                return `
                <div class="carousel-cell-bottom">
                    <a href="${filePath}" data-fancybox="gallery">
                        <img src="${filePath}" class="carousel-image-bottom" alt="gallery"/>
                    </a>
                </div>
            `;
            }).join(''); // Join the array into a single string

            return galleryHTML;  // Return the complete HTML string
        } catch (err) {
            console.error("Error reading gallery folder:", err);
            return ''; // Return an empty string in case of error
        }
    });


    // Return your Object options:
    return {}
};
const fs = require("fs");
const path = require("path");

module.exports = function() {
    return function (page) {
        // Get the folder path from the front matter
        const galleryFolder = page.data.mySite.galleryFolder;

        // Define the full path to the folder on the file system
        const fullPath = path.join(__dirname, "..", galleryFolder);

        // Read the files in the folder and return only image files
        const files = fs.readdirSync(fullPath).filter(file => {
            return [".jpg", ".jpeg", ".png", ".gif"].includes(path.extname(file));
        });

        // Return the file paths relative to the gallery folder
        return {
            images: files.map(file => `${galleryFolder}/${file}`)
        };
    };
};
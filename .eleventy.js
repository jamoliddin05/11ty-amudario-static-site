const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("CNAME");

    eleventyConfig.addFilter("getFiles", function(folderPath) {
         // Resolve the full path to the gallery folder
        const fullPath = path.join(__dirname, folderPath);

        try {
            // Read the files in the folder and filter by image extensions
            const files = fs.readdirSync(fullPath).filter(file => {
                return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(path.extname(file).toLowerCase());
            });

            // Create an HTML string for each file path
            const fullPaths = files.map(file => {
                const filePath = path.join(folderPath, file).toString();
                return filePath;
            });

            return fullPaths;  // Return the complete HTML string
        } catch (err) {
            console.error("Error reading gallery folder:", err);
            return ''; // Return an empty string in case of error
        } 
    });


    // Return your Object options:
    return {}
};
const fs = require('fs');
const path = require('path');

module.exports = () => {
    const imageDir = './assets/main-gallery';
    return fs.readdirSync(imageDir).map(file => path.join('/assets/main-gallery', file));
};

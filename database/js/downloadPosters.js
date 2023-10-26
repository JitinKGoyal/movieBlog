const fs = require('fs');
const https = require('https');
const imageUrls = require('../posters.json')

function downloadImage(url, filePath) {
    const file = fs.createWriteStream(filePath);

    https.get(url, response => {
        response.pipe(file);

        file.on('finish', () => {
            file.close(() => {
                console.log(`Downloaded ${url}`);
            });
        });
    }).on('error', error => {
        fs.unlink(filePath, () => {
            console.error(`Error downloading ${url}:`, error);
        });
    });
}

const folderPath = './images/';

fs.mkdirSync(folderPath, { recursive: true });

imageUrls.forEach((url, index) => {
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    const filePath = `${folderPath}${fileName}`;
    downloadImage(url, filePath);
});

const fs = require('fs');

const content = fs.readFileSync('c:/Users/PC/Desktop/JS PROJECTS/internet money phrase/index.html', 'utf8');

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
const imgs = [];
let match;
while ((match = imgRegex.exec(content)) !== null) {
    imgs.push({
        line: content.substring(0, match.index).split('\n').length,
        src: match[1]
    });
}

const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gis;
const links = [];
while ((match = aRegex.exec(content)) !== null) {
    links.push({
        line: content.substring(0, match.index).split('\n').length,
        href: match[1]
    });
}

fs.writeFileSync('c:/Users/PC/Desktop/JS PROJECTS/internet money phrase/extract_output.json', JSON.stringify({ imgs, links }, null, 2));

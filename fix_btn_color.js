const fs = require('fs');
const cssFile = 'c:/Users/PC/Desktop/JS PROJECTS/internet money phrase/walletoverlay.css';
let css = fs.readFileSync(cssFile, 'utf8');

css = css.replace(/\.w-btn-yellow\s*\{\s*background:\s*var\(--yellow\);\s*color:\s*#fff;/g, '.w-btn-yellow {\n    background: var(--yellow);\n    color: #170d32;');

fs.writeFileSync(cssFile, css);
console.log('Fixed btn colors');

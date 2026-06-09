const fs = require('fs');

const cssFile = 'c:/Users/PC/Desktop/JS PROJECTS/internet money phrase/walletoverlay.css';
let css = fs.readFileSync(cssFile, 'utf8');

// The original file doesn't seem to define the root variables, so let's prepend them.
// And let's replace all --plum occurrences with --yellow variants.
css = `:root {
    --yellow: #ffdb0c;
    --yellow-hv: #ffe653;
    --yellow-dim: rgba(255, 219, 12, 0.12);
    --yellow-glow: rgba(255, 219, 12, 0.05);
    
    /* Let's define the base colors if they were also missing */
    --surface: #ffffff;
    --border: rgba(49, 41, 56, 0.12);
    --border-hv: rgba(49, 41, 56, 0.25);
    --text: #170d32;
    --text-2: #3a3250;
    --text-3: #6b6380;
    --white: #ffffff;
}

` + css;

css = css.replace(/--plum-dim/g, '--yellow-dim');
css = css.replace(/--plum-glow/g, '--yellow-glow');
css = css.replace(/--plum-hv/g, '--yellow-hv');
css = css.replace(/--plum/g, '--yellow');
css = css.replace(/\.w-btn-plum/g, '.w-btn-yellow');

fs.writeFileSync(cssFile, css);

const htmlFile = 'c:/Users/PC/Desktop/JS PROJECTS/internet money phrase/index.html';
let html = fs.readFileSync(htmlFile, 'utf8');
html = html.replace(/w-btn-plum/g, 'w-btn-yellow');
html = html.replace(/background:\s*#3b82f6/g, 'background:#ffdb0c;color:#170d32');
html = html.replace(/rgba\(34,197,94,0\.15\)/g, 'rgba(255,219,12,0.15)');
html = html.replace(/#22c55e/g, '#ffdb0c');

fs.writeFileSync(htmlFile, html);

console.log('CSS and HTML replaced successfully.');

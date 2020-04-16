const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

function returnHTML() {
    return src('./src/index.html')
    .pipe(dest('./build/src'))
}
    
function returnJS() {
    return src('./src/js/index.js')
    .pipe(dest('./build/src/js'))
}

function returnCSS() {
    return src('./src/styles/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('./build/src/styles/'))
}

exports.returnHTML = returnHTML;
exports.returnCSS = returnCSS;
exports.returnJS = returnJS;
exports.default = parallel(returnHTML, returnCSS, returnJS);


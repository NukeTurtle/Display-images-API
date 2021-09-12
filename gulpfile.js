var gulp = require("gulp");
var {src,dest} = require("gulp");
var minifyJs = require("gulp-uglify");
var concat = require("gulp-concat");
var minifyCss = require("gulp-clean-css");

gulp.task("default", function() {
    return (
    /* we merge all css files into one */
    src("*.css")
    .pipe(concat("style.css"))
    .pipe(dest("./prod/css/"))
    
    /* we minify/uglify the css file for production environment */
    .pipe(minifyCss("prod/css/style.css"))
    .pipe(dest("./prod/css/")),
    
    /* we minify/uglify the js file for production environment */
    src("functions.js")
    .pipe(minifyJs())
    .pipe(dest("./prod/js/")));
});
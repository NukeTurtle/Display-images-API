var gulp = require("gulp");
var {src,dest} = require("gulp");
var minifyJs = require("gulp-uglify");
var concat = require("gulp-concat");
var minifyCss = require("gulp-clean-css");

gulp.task("default", function() {
    return (src("*.css")
    /* we merge all css files into one */
    .pipe(concat("style.css"))
    .pipe(dest("./prod/css/"))
    
    /* we minify/uglify the css file for production environment */
    .pipe(minifyCss("./prod/css/style.css")),
    src("functions.js")
    
    /* we minify/uglify the js file for production environment */
    .pipe(minifyJs())
    .pipe(gulp.dest("./prod/js/")));
});
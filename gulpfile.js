var gulp = require('gulp');
var inlineCss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('default', function() {
    return gulp.src('./app/index.html')
        .pipe(inlineCss())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/'));
});
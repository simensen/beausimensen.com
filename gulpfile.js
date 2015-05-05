var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(compass({
            bundleExec: true,
            css: 'source/assets/css',
            sassDir: 'sass'
        }));
});

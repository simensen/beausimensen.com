var gulp = require('gulp');
var compass = require('compass');

gulp.task('compass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(compass({
            css: 'source/assets/css'
            sassDir: 'sass'
        }));
});

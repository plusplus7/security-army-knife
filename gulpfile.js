var gulp = require('gulp');
var less = require('gulp-less');

var paths = {
    pages: ['src/*.html', 'src/pages/*.html', 'src/*.js']
};

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});


gulp.task('compile-less', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: []
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-html', 'compile-less')));
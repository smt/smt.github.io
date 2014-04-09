var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('scripts', function (cb) {
    gulp.src('./src/app.js')
        .pipe(browserify({
            basedir: './',
            debug: !util.env.production
        }))
        .pipe(concat('built.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', ['scripts'], function () {
    var watcher = gulp.watch('./src/**/*.js', ['scripts']);
    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', building scripts...');
    });
});

gulp.task('default', ['scripts', 'watch']);

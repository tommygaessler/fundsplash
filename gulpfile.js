// *** dependencies *** //

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var connect = require('gulp-connect-php');
var runSequence = require('run-sequence');


// *** tasks *** ///

gulp.task('connect', function () {
  connect.server({
    base: './',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(connect.reload());
});

gulp.task('javascript', function () {
  gulp.src('./**/*.js')
    .pipe(connect.reload());
});

gulp.task('jshint', function() {
  return gulp.src('./**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('style', function() {
  return gulp.src('**/*.js')
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('watch', function() {
  gulp.watch('./js/*.js', ['jshint', 'javascript', 'style']);
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./css/*.css'], ['css']);
});

// *** defailt task *** //
gulp.task('default', function() {
  runSequence(
    // ['jshint'],
    // ['style'],
    ['watch'],
    ['connect']
  );
});

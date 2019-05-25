const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minify = require('gulp-minify-css');
const merge = require('merge-stream');
const watch = require('gulp-watch');


gulp.task('less/css', function () {

  let lessStream = gulp.src(['less/*.less'])
      .pipe(less())
      .pipe(concat('less-files.less'));

  return merge(lessStream)
      .pipe(concat('style.css'))
      //.pipe(minify())
      .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
  return watch('less/*.less', function () {
    let lessStream = gulp.src(['less/*.less'])
        .pipe(less())
        .pipe(concat('less-files.less'));

    return merge(lessStream)
        .pipe(concat('style.css'))
        //.pipe(minify())
        .pipe(gulp.dest('css'))
  })
});



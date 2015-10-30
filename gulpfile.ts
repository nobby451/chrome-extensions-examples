/// <reference path="typings/gulp/gulp.d.ts" />

var gulp = require('gulp'),
    yaml = require('gulp-yaml');

gulp.task('yaml', () => {
  gulp
    .src('src/**/*.yml', {base: 'src'})
    .pipe(yaml())
    .pipe(gulp.dest('dest'));
});

gulp.task('default', ['yaml']);

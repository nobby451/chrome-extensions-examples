/// <reference path="typings/gulp/gulp.d.ts" />

var
  gulp = require('gulp'),
  yaml = require('gulp-yaml'),
  typescript = require('gulp-typescript');

gulp.task('yaml', () => {
  gulp
    .src('src/**/*.yml', {base: 'src'})
    .pipe(yaml())
    .pipe(gulp.dest('dest'));
});

gulp.task('typescript', () => {
  gulp
    .src('src/**/*.ts', {base: 'src'})
    .pipe(typescript())
    .pipe(gulp.dest('dest'));
});

gulp.task('svg', () => {
  gulp
    .src('src/**/*.svg', {base: 'src'})
    .pipe(gulp.dest('dest'));
})

gulp.task('default', ['yaml', 'typescript', 'svg']);

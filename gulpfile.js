"use strict";

var gulp    = require("gulp"),
    watch   = require('gulp-watch'),
    sass    = require("gulp-sass"),
    bourbon = require("node-bourbon").includePaths,
    neat    = require("node-neat").includePaths;

// Compiles all gulp tasks
gulp.task('default', ['watch', 'sassify']);

// Live reload anytime a file changes
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sassify']);
});

gulp.task('sassify', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({includePaths: require('node-neat', 'node-bourbon').includePaths,
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


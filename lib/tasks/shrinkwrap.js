/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var gulp       = require('../gulp');
var shrinkwrap = require('gulp-shrinkwrap');

exports.task = function shrinkwrapTask (callback, destination) {
  destination = destination || './npm-shrinkwrap.json';
  callback    = callback || function () {};

  return gulp.src('./package.json')
    .pipe(shrinkwrap.lock())
    .pipe(gulp.dest(destination))
    .on('end', callback);
};

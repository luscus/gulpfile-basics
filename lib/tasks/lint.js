/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var constants  = require('../constants');
var gulp       = require('../gulp');
var jshint     = require('gulp-jshint');
var stylish    = require('jshint-stylish');

exports.task = function lint () {

  return gulp.src(constants.LINT_FILES)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
};

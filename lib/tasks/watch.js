/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var constants  = require('../constants');
var gulp       = require('../gulp');

exports.task = function watchTask () {
  return gulp.watch(constants.LINT_FILES, ['lint', 'test']);
};

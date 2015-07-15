/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var constants  = require('../constants');
var gulp       = require('../gulp');
var mocha      = require('gulp-mocha');

exports.task = function testTask () {

  return gulp.src(constants.TEST_FILES, {read: false})
    .pipe(mocha({
      reporter: 'spec',
      bail: true
    }));
};

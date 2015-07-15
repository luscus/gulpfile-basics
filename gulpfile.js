/* jshint node:true */
/* jshint expr:true*/
/* global require */
'use strict';

// documentation on the provided basic tasks can be found at:
// https://www.npmjs.com/package/gulpfile-basics
var gulp = require('./lib/gulpfile-basics');

// For this package coverage has to be disabled
// until a solution to test the tasks has been found
gulp.tasks.bumpVersion.dep = ['test'];
delete gulp.tasks.coverage;

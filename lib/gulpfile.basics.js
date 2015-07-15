/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var gulp        = require('./gulp');

var watch       = require('./tasks/watch');
var lint        = require('./tasks/lint');
var test        = require('./tasks/test');
var coverage    = require('./tasks/coverage');
var bumpVersion = require('./tasks/bumpVersion');
var shrinkwrap  = require('./tasks/shrinkwrap');
var commit      = require('./tasks/commit');
var release     = require('./tasks/release');
var publish     = require('./tasks/publish');



// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);

// Rerun the task when a file changes
gulp.task('watch', watch.task);

gulp.task('lint', lint.task);

gulp.task('test', ['lint'], test.task);

gulp.task('coverage', ['lint'], coverage.task);

gulp.task('shrinkwrap', shrinkwrap.task);

// Update bower, component, npm at once:
gulp.task('bumpVersion', ['coverage'], bumpVersion.task);

gulp.task('commit', ['bumpVersion'], commit.task);

gulp.task('release', ['commit'], release.task);

gulp.task('publish', ['release'], publish.task);


module.exports = gulp;

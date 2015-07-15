/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var shrinkwrap = require('./shrinkwrap');
var constants  = require('../constants');
var gulp       = require('../gulp');
var bump       = require('gulp-bump');
var Q          = require('q');

exports.task = function bumpVersionTask (patch, minor, major) {
  var deferred = Q.defer();
  var type = 'patch';

  if (!minor && !major || minor && major) {
    // if no type has been specified,
    // or all types have been used
    // enforce patch
    patch = true;
  }

  if (minor && !patch) {
    type = 'minor';
  }

  if (major && !patch) {
    type = 'major';
  }

  gulp.src(constants.BUMP_FILES)
    .pipe(bump({type:type}))
    .pipe(gulp.dest('./'))
    .on('end', function () {
      shrinkwrap(function () {
        deferred.resolve();
      });
    });

  return deferred.promise;
};

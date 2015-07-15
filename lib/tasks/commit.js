/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var constants  = require('../constants');
var gulp       = require('../gulp');
var git        = require('gulp-git');

exports.gitCommitHandler = function gitCommitHandler (err) {
  if (err) throw err;
};

exports.task = function commitTask () {

  // reload package.json file
  delete require.cache[require.resolve(constants.PATH_PREFIX + 'package.json')];
  var packageInfo = require(constants.PATH_PREFIX + 'package.json');

  // build new version string
  constants.PACKAGE_VERSION     = 'v' + packageInfo.version;

  return gulp.src(constants.COMMIT_FILES)
    .pipe(git.commit(constants.PACKAGE_VERSION, exports.gitCommitHandler));
};

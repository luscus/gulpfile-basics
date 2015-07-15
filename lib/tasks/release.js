/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var constants  = require('../constants');
var gulp       = require('../gulp');
var git        = require('gulp-git');
var Q          = require('q');

exports.task = function releaseTask () {
  var deferred = Q.defer();

  // reload package.json file
  delete require.cache[require.resolve(constants.PATH_PREFIX + 'package.json')];
  var packageInfo = require(constants.PATH_PREFIX + 'package.json');

  // build new version string
  constants.PACKAGE_VERSION     = 'v' + packageInfo.version;

  git.tag(constants.PACKAGE_VERSION, constants.PACKAGE_VERSION, function gitTagHandler(err) {
    if (err) {
      deferred.reject(err);
      return;
    }

    git.push('origin', 'master', {args: '--tags'}, function gitPushHandler(err) {
      if (err) {
        deferred.reject(err);
        return;
      }

      deferred.resolve();
    });
  });

  return deferred.promise;
};

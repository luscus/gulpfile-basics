/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var constants       = require('../constants');
var gulp            = require('../gulp');
var Q               = require('q');
var mocha           = require('gulp-mocha');
var istanbul        = require('gulp-istanbul');
var coberturaBadger = require('istanbul-cobertura-badger');
var coberturaFile   = "coverage/cobertura-coverage.xml";

exports.task = function coverageTask (callback, threshold) {
  callback = callback || function () {};
  threshold = threshold || constants.COVERAGE_THRESHOLDS;
  var deferred = Q.defer();
  var thresholdError;

  gulp.src([constants.LIB_FILES])
    .pipe(istanbul()) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(constants.TEST_FILES)
        .pipe(mocha({
          reporter: 'dot',
          bail:     true
        }))
        .pipe(istanbul.writeReports({
          dir: constants.COVERAGE_PATH,
          reporters: [ 'lcov', 'cobertura', 'json' ],
          reportOpts: {
            lcov:      {dir: constants.COVERAGE_PATH},
            cobertura: {dir: constants.COVERAGE_PATH},
            json:      {dir: constants.REPORT_PATH, file: 'converage.json'}
          }
        }))
        .pipe(istanbul.enforceThresholds({
          thresholds: threshold
        }))
        .on('error', function coverageErrorHandler (error) {
          if (error.message !== 'Coverage failed') {
            throw error;
          }

          thresholdError = new Error('Coverage Thresholds failure - bellow: ' + threshold.global + '%');

          if (!callback) {
            throw error;
          }
        })
        .on('end', function () {

          // create coverage badge for README file
          coberturaBadger(coberturaFile, constants.REPORT_PATH, function() {
            console.log("Badge created at " + constants.REPORT_PATH + "/cobertura.svg");

            if (callback) callback(thresholdError);

            deferred.resolve();
          });
        });
    });

  return deferred.promise;
};

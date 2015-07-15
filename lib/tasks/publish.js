/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global module */
'use strict';

var gulp       = require('../gulp');
var npm        = require('npm');
var Q          = require('q');

exports.task = function publishTask () {
  var deferred = Q.defer();

  npm.load({}, function () {
    npm.commands.publish(function publishTaskHandler (err) {
      if (err) {
        deferred.reject(err);
        return;
      }

      deferred.resolve();
    });
  });

  return deferred.promise;
};

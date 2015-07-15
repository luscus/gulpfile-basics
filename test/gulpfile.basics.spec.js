/* jshint node:true */
/* jshint expr:true*/
/* global require */
/* global process */
/* global describe */
/* global after */
/* global it */
'use strict';

require('chai').should();

var gulp    = require('../lib/gulpfile-basics');
var folders = process.cwd().split(/\/|\\/);

describe('gulp-basics', function () {

  it('should have a property "tasks"', function () {
    gulp.should.have.property('tasks');
    gulp.tasks.should.be.an('object');
  });

  it('should have a task "default"', function () {
    gulp.tasks.should.have.property('default');
    gulp.tasks.default.should.be.an('object');

    gulp.tasks.default.dep.should.be.an('array');
    gulp.tasks.default.dep.length.should.equal(1);

    gulp.tasks.default.dep[0].should.equal('watch');
  });

  it('should have a task "watch"', function () {
    gulp.tasks.should.have.property('watch');
    gulp.tasks.watch.should.be.an('object');

    gulp.tasks.watch.dep.should.be.an('array');
    gulp.tasks.watch.dep.length.should.equal(0);
  });

  it('should have a task "lint"', function () {
    gulp.tasks.should.have.property('lint');
    gulp.tasks.lint.should.be.an('object');

    gulp.tasks.lint.dep.should.be.an('array');
    gulp.tasks.lint.dep.length.should.equal(0);
  });

  it('should have a task "test"', function () {
    gulp.tasks.should.have.property('test');
    gulp.tasks.test.should.be.an('object');

    gulp.tasks.test.dep.should.be.an('array');
    gulp.tasks.test.dep.length.should.equal(1);

    gulp.tasks.test.dep[0].should.equal('lint');
  });

  /* TODO find a solution to test this
  it('should have a task "coverage"', function () {
    gulp.tasks.should.have.property('coverage');
    gulp.tasks.coverage.should.be.an('object');

    gulp.tasks.coverage.dep.should.be.an('array');
    gulp.tasks.coverage.dep.length.should.equal(1);

    gulp.tasks.coverage.dep[0].should.equal('lint');
  });
   */

  it('should have a task "bumpVersion"', function () {
    gulp.tasks.should.have.property('bumpVersion');
    gulp.tasks.bumpVersion.should.be.an('object');

    gulp.tasks.bumpVersion.dep.should.be.an('array');
    gulp.tasks.bumpVersion.dep.length.should.equal(1);

    // TODO has to be used when a solution for "coverage" has been found
    //gulp.tasks.bumpVersion.dep[0].should.equal('coverage');
    gulp.tasks.bumpVersion.dep[0].should.equal('test');
  });

  it('should have a task "shrinkwrap"', function () {
    gulp.tasks.should.have.property('shrinkwrap');
    gulp.tasks.shrinkwrap.should.be.an('object');

    gulp.tasks.shrinkwrap.dep.should.be.an('array');
    gulp.tasks.shrinkwrap.dep.length.should.equal(0);
  });

  it('should have a task "commit"', function () {
    gulp.tasks.should.have.property('commit');
    gulp.tasks.commit.should.be.an('object');

    gulp.tasks.commit.dep.should.be.an('array');
    gulp.tasks.commit.dep.length.should.equal(1);

    gulp.tasks.commit.dep[0].should.equal('bumpVersion');
  });

  it('should have a task "release"', function () {
    gulp.tasks.should.have.property('release');
    gulp.tasks.release.should.be.an('object');

    gulp.tasks.release.dep.should.be.an('array');
    gulp.tasks.release.dep.length.should.equal(1);

    gulp.tasks.release.dep[0].should.equal('commit');
  });

  it('should have a task "publish"', function () {
    gulp.tasks.should.have.property('publish');
    gulp.tasks.publish.should.be.an('object');

    gulp.tasks.publish.dep.should.be.an('array');
    gulp.tasks.publish.dep.length.should.equal(1);

    gulp.tasks.publish.dep[0].should.equal('release');
  });

});

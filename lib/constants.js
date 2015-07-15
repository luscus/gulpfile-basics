var path                = require('path');

exports.PACKAGE_VERSION = null;
exports.PATH_PREFIX     = process.cwd() + path.sep;
exports.REPORT_PATH     = 'reports';
exports.COVERAGE_PATH   = 'coverage';
exports.LIB_FILES       = './lib/**/*.js';
exports.TEST_FILES      = './test/**/*.spec.js';

exports.LINT_FILES      = [
  '!./node_modules/**/*',
  '!./etc/**/*',
  '!./report/**/*',
  '!./coverage/**/*',
  './**/*.js',
  './**/*.json'
];

exports.BUMP_FILES      = [
  './bower.json',
  './component.json',
  './package.json'
];

exports.COMMIT_FILES    = [
  exports.PATH_PREFIX+'package.json',
  exports.PATH_PREFIX+'gulpfile.js',
  exports.PATH_PREFIX+'npm-shrinkwrap.json',
  exports.PATH_PREFIX+'reports/**/*'
];

exports.COVERAGE_THRESHOLDS = {
  global: 70
};

//Object.freeze(exports);

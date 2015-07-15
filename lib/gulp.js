// this only serves as a pointer
// referencing the Gulp Object
// in order to access it per "require"
module.exports = require('gulp-param')(require('gulp'), process.argv);

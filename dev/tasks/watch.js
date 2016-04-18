var gulp = require("gulp");
var paths = require("./paths");
var livereload = require("gulp-livereload");

/**
* watch task
*
* watch sources to dynamically build files whenever it's needed
* used for development
*/
module.exports = function() {
	gulp.watch(paths.sources.scripts + "*.js", ["scripts:main"]);
	gulp.watch(paths.sources.style + "main.styl", ["style"]);

	gulp.watch([paths.dist.public + "/**/*"], livereload);
};
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
	livereload.listen();

	gulp.watch(paths.sources.scripts + "vendors/*.js", ["scripts:vendors"]);
	gulp.watch(paths.sources.scripts + "plugins/*.js", ["scripts:plugins"]);
	gulp.watch(paths.sources.scripts + "*.js", ["scripts:main"]);
	gulp.watch(paths.sources.styles + "**/*.styl", ["styles:cke"]);
	gulp.watch(paths.sources.styles + "**/*.styl", ["styles:main"]);
	gulp.watch([paths.dist.public + "/**/*"], livereload);
};
var gulp = require("gulp");
var paths = require("./paths");

/**
 * task fonts
 *
 * copies fonts contents in `dist/`
 */
module.exports = function(){
	return gulp.src(paths.sources.fonts)
		.pipe(gulp.dest(paths.dist.fonts));
};
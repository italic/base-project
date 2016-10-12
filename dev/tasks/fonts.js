var gulp = require('gulp')
var paths = require('./paths')
var changed = require('gulp-changed')

/**
 * task fonts
 *
 * copies fonts contents in `dist/`
 */
module.exports = function () {
	return gulp.src(paths.sources.fonts)
		.pipe(changed.dist.fonts)
		.pipe(gulp.dest(paths.dist.fonts))
}
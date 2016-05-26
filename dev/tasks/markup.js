var gulp = require("gulp");
var util = require("gulp-util");
var pug = require("gulp-pug");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var filesize = require("gulp-filesize");
var livereload = require("gulp-livereload");

var paths = require("./paths");
var opts = require("./options");

/**
 * task markup
 */
module.exports = function() {
	return gulp.src(paths.sources.markup + "*.pug")
		.pipe(opts.plumber ? plumber() : util.noop())
		.pipe(filesize())
		.pipe(pug({
			pretty: '	'
		}))
		.pipe(filesize())
		.pipe(gulp.dest(paths.dist.markup))
		.pipe(livereload());
};
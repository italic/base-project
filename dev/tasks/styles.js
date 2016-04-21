var gulp = require("gulp");
var util = require("gulp-util");
var stylus = require("gulp-stylus");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var filesize = require("gulp-filesize");
var sourcemaps = require("gulp-sourcemaps");
var livereload = require("gulp-livereload");
var autoprefixer = require("gulp-autoprefixer");

var paths = require("./paths");
var opts = require("./options");

/**
 * task stylesheets
 */
module.exports = function() {
	return gulp.src(paths.sources.styles + "main.styl")
		.pipe(opts.plumber ? plumber() : util.noop())
		.pipe(opts.minify ? sourcemaps.init() : util.noop())
		.pipe(filesize())
		.pipe(stylus(
			opts.minify ? { compress: true } : {}
		))
		.pipe(autoprefixer({
			browsers: ["last 3 versions"],
			cascade: false
		}))
		.pipe(rename("main.min.css"))
		.pipe(filesize())
		.pipe(opts.minify ? sourcemaps.write("../maps") : util.noop())
		.pipe(gulp.dest(paths.dist.styles))
		.pipe(livereload());
};
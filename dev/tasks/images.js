var gulp = require("gulp");
var opts = require("./options");
var cache = require("gulp-cache");
var imagemin = require("gulp-imagemin");

var paths = require("./paths");

module.exports = function() {
	return gulp.src(paths.sources.images + "**/*")
		.pipe(cache(imagemin()))
		.pipe(gulp.dest(paths.dist.images));
};
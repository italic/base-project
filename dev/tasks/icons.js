var gulp = require("gulp");
var opts = require("./options");
var util = require("gulp-util");
var plumber = require("gulp-plumber");
var svgSymbols = require("gulp-svg-symbols");

var paths = require("./paths");

module.exports = function() {
	return gulp.src(paths.sources.icons + "*.svg")
	.pipe(opts.plumber ? plumber() : util.noop())
	.pipe(svgSymbols({
		svgId: "rci-%f",
		className: ".rci-icon-%f",
		fontSize: 512
	}))
	.pipe(gulp.dest(paths.sources.fonts + "rci-icons/"));
};
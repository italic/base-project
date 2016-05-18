var gulp = require("gulp");
var opts = require("./options");
var util = require("gulp-util");
var gulpif = require("gulp-if");
var plumber = require("gulp-plumber");
var svg2png = require('gulp-svg2png');
var svgSymbols = require("gulp-svg-symbols");

var paths = require("./paths");

module.exports = {
	svg: function() {
		return gulp.src(paths.sources.icons + "*.svg")
			.pipe(opts.plumber ? plumber() : util.noop())
			.pipe(svgSymbols({
				svgId: "rci-%f",
				className: ".rci-icon-%f",
				fontSize: 512
			}))
			//.pipe(gulp.dest(paths.source.fonts + "rci-icons/"));
			.pipe(gulpif( /[.]css$/, gulp.dest(paths.sources.styles + '/css/')))
			.pipe(gulpif( /[.]svg$/, gulp.dest(paths.dist.sprites)));
	},
	png: function() {
		return gulp.src(paths.sources.icons + "*.svg")
			.pipe(opts.plumber ? plumber() : util.noop())
			.pipe(svg2png())
			.pipe(gulp.dest(paths.dist.images + "pictos/"));
	}
};
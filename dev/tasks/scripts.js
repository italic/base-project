var gulp = require('gulp')
var util = require('gulp-util')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var plumber = require('gulp-plumber')
var filesize = require('gulp-filesize')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

var paths = require('./paths')
var opts = require('./options')

module.exports = {
	vendors: function() {
		return gulp.src(paths.sources.scripts + 'vendors/*.js')
			.pipe(opts.plumber ? plumber() : util.noop())
			.pipe(uglify())
			.pipe(concat('vendors.min.js'))
			.pipe(opts.plumber ? plumber.stop() : util.noop())
			.pipe(gulp.dest(paths.dist.scripts))
			.pipe(livereload())
	},

	plugins: function() {
		return gulp.src(paths.sources.scripts + 'plugins/*.js')
			.pipe(opts.plumber ? plumber() : util.noop())
			.pipe(uglify())
			.pipe(concat('plugins.min.js'))
			.pipe(opts.plumber ? plumber.stop() : util.noop())
			.pipe(gulp.dest(paths.dist.scripts))
			.pipe(livereload())
	},

	main: function() {
		return gulp.src(paths.sources.scripts + '*.js')
			.pipe(opts.plumber ? plumber() : util.noop())
			.pipe(opts.minify ? sourcemaps.init() : util.noop())
			.pipe(filesize())
			.pipe(opts.minify ? uglify({ 'preserveComments': 'some' }) : util.noop())
			.pipe(concat('main.min.js'))
			.pipe(filesize())
			.pipe(opts.plumber ? plumber.stop() : util.noop())
			.pipe(opts.minify ? sourcemaps.write('../maps') : util.noop())
			.pipe(gulp.dest(paths.dist.scripts))
			.pipe(livereload())
	}
}

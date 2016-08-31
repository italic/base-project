var gulp = require('gulp');
var mjml = require('gulp-mjml')
var mjmlEngine = require('mjml')

var path = {
	dev: 'dev/',
	dist: 'www/'
}

gulp.task('mjml:build', function () {
	return gulp.src(path.dev + '*.mjml')
		.pipe(mjml(mjmlEngine))
		.pipe(gulp.dest(path.dist))
});

gulp.task('watch', function(){
	gulp.watch(path.dev + '*.mjml', ['mjml:build']);
});

gulp.task('default', ['mjml:build', 'watch']);
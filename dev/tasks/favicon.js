var gulp = require('gulp')
var util = require('gulp-util')

var paths = require('./paths')

module.exports = function() {
	return gulp.task('generate-favicon', function(done) {
		realFavicon.generateFavicon({
			masterPicture: 'TODO: Path to your master picture',
			dest: 'TODO: Path to the directory where to store the icons',
			iconsPath: '/',
			design: {
				ios: {
					pictureAspect: 'noChange'
				},
				desktopBrowser: {},
				windows: {
					pictureAspect: 'noChange',
					backgroundColor: '#da532c',
					onConflict: 'override'
				},
				androidChrome: {
					pictureAspect: 'noChange',
					themeColor: '#ffffff',
					manifest: {
						name: 'myapp',
						display: 'browser',
						orientation: 'notSet',
						onConflict: 'override',
						declared: true
					}
				},
				safariPinnedTab: {
					pictureAspect: 'silhouette',
					themeColor: '#5bbad5'
				}
			},
			settings: {
				scalingAlgorithm: 'Mitchell',
				errorOnImageTooSmall: false
			}
		}, function() {
			done()
		})
	})
}
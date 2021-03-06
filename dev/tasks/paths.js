/**
 * Path configuration
 */
module.exports = {
	sources: {
		markup: './dev/pug/',
		styles: './dev/stylus/',
		scripts: './dev/js/',
		fonts: './dev/fonts/',
		icons: './dev/icons/',
		images: './dev/images/',
		tasks: './dev/tasks/',
		sprites: './dev/sprites/'
	},
	dist: {
		public: './../www/',
		markup: './../www/',
		styles: './../www/assets/css/',
		scripts: './../www/assets/js/',
		fonts: './../www/assets/',
		sprites: './../www/assets/sprites/',
		images: './../www/assets/images/',
		maps: './../www/assets/maps/'
	},
	tmp: './tmp/'
}

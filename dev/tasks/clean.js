var del = require('del')
var paths = require('./paths')

module.exports = function () {
	return del([paths.dist.images, paths.dist.fonts])
}
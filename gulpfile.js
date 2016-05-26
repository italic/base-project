var gulp = require('gulp');
var paths = require("./dev/tasks/paths");

gulp.task("clean", require(paths.sources.tasks + "clean"));

// static assets
gulp.task("fonts", require(paths.sources.tasks + "fonts"));

// generated assets
gulp.task("markup", require(paths.sources.tasks + "markup"));
gulp.task("styles", require(paths.sources.tasks + "styles"));
gulp.task("scripts:vendors", require(paths.sources.tasks + "scripts").vendors);
gulp.task("scripts:plugins", require(paths.sources.tasks + "scripts").plugins);
gulp.task("scripts:main", require(paths.sources.tasks + "scripts").main);
gulp.task("scripts", ["scripts:vendors", "scripts:plugins", "scripts:main"]);
gulp.task("sprites", require(paths.sources.tasks + "sprites"));
gulp.task("images", require(paths.sources.tasks + "images"));
gulp.task("icons:svg", require(paths.sources.tasks + "icons").svg);
gulp.task("icons:png", require(paths.sources.tasks + "icons").png);
gulp.task("icons", ["icons:svg", "icons:png"]);

// build
gulp.task("build", [
	"markup",
	"styles",
	"scripts",
	"sprites",
	"icons",
	"fonts",
	"images",
	"icons"
]);

// dev tasks
gulp.task("server", ["build"], require(paths.sources.tasks + "server").start);
gulp.task("watch", ["build"], require(paths.sources.tasks + "watch"));
gulp.task("default", [
	"build",
	"server",
	"watch"
]);

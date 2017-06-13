var config = require('../config'),
	gulp = require('gulp'),
	clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src(config.build.root, {read: false})
		.pipe(clean());
});

gulp.task('clean:vendor', function() {
	return gulp.src(config.src.vendor + '**/*.*', {read: false})
		.pipe(clean());
});
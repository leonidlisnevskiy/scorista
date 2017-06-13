var config = require('../config'),
gulp = require('gulp'),
cache = require('gulp-cache'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant');

gulp.task('copy', function() {
	gulp.src(config.src.img + '**/*.*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest(config.build.img));

	gulp.src(config.src.fonts + '*.*')
	.pipe(gulp.dest(config.build.fonts));

	gulp.src(config.src.video + '*.*')
	.pipe(gulp.dest(config.build.video));
});

gulp.task('copy:vendor', function() {
	//helpers html5shiv
	gulp.src(config.src.vendor + '*.js')
	.pipe(gulp.dest(config.build.js));
	gulp.src(config.src.vendor + '*.css')
	.pipe(gulp.dest(config.build.css + 'vendor/'));

	// favicon
	gulp.src([config.src.vendor + '*.png', config.src.vendor + '*.ico'])
	.pipe(gulp.dest(config.build.root));
});

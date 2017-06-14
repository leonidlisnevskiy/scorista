var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
cleanCSS = require('gulp-clean-css'),
rename = require('gulp-rename'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
mqpacker = require('css-mqpacker'),
plumber = require('gulp-plumber'),
notify = require('gulp-notify'),
config = require('../config');

gulp.task('sass', function () {
	var processors = [
	autoprefixer({browsers: ['last 7 versions'], cascade: false}),
	mqpacker({
		sort: function (a, b) {
			a = a.replace(/\D/g,'');
			b = b.replace(/\D/g,'');
			return b-a;
		}
	})
	];

	return sass([config.src.sass + '**/*.sass', config.src.sass + '**/*.scss'], {
		noCache: true,
		style: 'compact'
	})
	.pipe(plumber({
		errorHandler: config.errorHandler
	}))
	.pipe(postcss(processors))
	.on('error', notify.onError({
		title: 'Sass Error!',
		message: '<%= error.message %>'
	}))
	.pipe(gulp.dest(config.build.css))
	.pipe(cleanCSS())

	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest(config.build.css))
	.pipe(notify({
		message: "<%= file.relative %> ready",
		sound: true
	}))
});


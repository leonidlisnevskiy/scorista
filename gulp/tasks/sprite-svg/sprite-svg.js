var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var svgmin      = require('gulp-svgmin');
var svgSprite = require('gulp-svg-sprite');
var rename      = require('gulp-rename');
var cheerio     = require('gulp-cheerio');
var replace = require('gulp-replace');
var config      = require('../../config');

gulp.task('sprite:svg', function() {
	return gulp.src(config.src.iconsSvg  + '/*.svg')
	.pipe(plumber({
		errorHandler: config.errorHandler
	}))
	.pipe(svgmin({
		js2svg: {
			pretty: true
		},
		plugins: [{
			removeDesc: true
		}, {
			cleanupIDs: true
		}, {
			mergePaths: false
		}]
	}))
	.pipe(rename({ prefix: 'icon-' }))
	.pipe(cheerio({
		run: function ($) {
			$('[fill]:not([fill="currentColor"])').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: {xmlMode: true}
	}))
	.pipe(replace('&gt;', '>'))
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: "../../../" + config.build.svg + "/sprite.svg",
				render: {
					scss: {
						template: config.src.sass + "lib/_sprite_template.scss",
						dest: "../lib/_sprite-svg.scss"
					}
				}
			}
		}
	}))
	.pipe(gulp.dest(config.src.sass));
});
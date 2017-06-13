var util = require('gulp-util');

var destPath = 'build';
var static = destPath + '/static';

var srcFolder = 'src/',
appFolder = 'build/';

module.exports = {
	appServer: 'build',
	src: {
		root    : srcFolder,
		sass    : srcFolder + 'sass/',
		css     : srcFolder + 'css/',
		js      : srcFolder + 'js/',
		img     : srcFolder + 'img/',
		icons   : srcFolder + 'img/icons/',
		templates   : srcFolder + 'templates',
		svg     : srcFolder + 'img/svg/',
		iconsSvg      : srcFolder + 'img/svg/icons',
		fonts   : srcFolder + 'fonts/',
		vendor   : srcFolder + 'vendor/',
		video   : srcFolder + 'video/'
	},
	build: {
		root    : appFolder,
		css     : appFolder + 'css/',
		js      : appFolder + 'js/',
		img     : appFolder + 'img/',
		svg     : appFolder + 'img/svg/',
		fonts   : appFolder + 'fonts/',
		video   : appFolder + 'video/'
	},
	dest: {
		root : destPath,
		html : destPath,
		css  : static + '/css',
		js   : static + '/js',
		img  : static + '/img',
		fonts: static + '/fonts',
		lib  : destPath + '/lib'
	},
	errorHandler: require('./util/handle-errors')
};

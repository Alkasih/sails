/* -------------------------------------------------------------------------- */

var gulp 				= require('gulp');
var webServer 	= require('gulp-webserver');
var mainFiles 	= require('main-bower-files');
var injectFiles = require('gulp-inject');
var del 				= require('del');

/* -------------------------------------------------------------------------- */

var paths = {

	www: {
		root: 'www',
		vendor: 'www/vendor',
		index: 'www/index.html',

	},

	app: {
		all: 'app/**/*'
	},

	bower: {
		all: 'bower_components/**/*'
	}

};

/* -------------------------------------------------------------------------- */

gulp.task('default', ['watch']);

/* -------------------------------------------------------------------------- */

gulp.task('watch', ['serve'], function () {

  console.info("----- 'watch', ['serve'] -----");

	gulp.watch(paths.app.all, ['scripts']);

	gulp.watch(paths.bower.all, ['vendors']);

});

/* -------------------------------------------------------------------------- */

gulp.task('serve', ['vendors'], function () {

  console.info("----- 'serve', ['vendors'] -----");

  return gulp.src(paths.www.root)
		.pipe(webServer(
			{
				livereload: true
			}
		));

});

/* -------------------------------------------------------------------------- */

gulp.task('vendors', ['copyVendor', 'scripts'], function () {

  console.info("----- 'vendors', ['copyVendor', 'scripts'] -----");

  var vendors = gulp.src(paths.www.vendor + '/**/*', { read: false });

	return gulp.src(paths.www.index)
		.pipe(injectFiles(vendors,
			{
				relative: true,
				name: 'injectVendor'
			}
		))
		.pipe(gulp.dest(paths.www.root));

});

gulp.task('copyVendor', function () {

  console.info("----- 'copyVendor' -----");

  return gulp.src(mainFiles()).pipe(gulp.dest(paths.www.vendor));

});

/* -------------------------------------------------------------------------- */

gulp.task('scripts', ['copyApp'], function () {

  console.info("----- 'scripts', ['copyApp'] -----");

  var path = gulp.src(paths.www.root + '/*', { read: false });

	return gulp.src(paths.www.index)
		.pipe(injectFiles(path,
			{
				relative: true
			}
		))
		.pipe(gulp.dest(paths.www.root));

});

gulp.task('copyApp', function () {

  console.info("----- 'copyApp' -----");

  return gulp.src(paths.app.all).pipe(gulp.dest(paths.www.root));

});

/* -------------------------------------------------------------------------- */

gulp.task('clean', function (cb) {

  console.info("----- 'clean' -----");

  del([paths.www.root], cb);

});

/* -------------------------------------------------------------------------- */

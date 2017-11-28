// gulpfile.js
var browserSync = require('browser-sync');
var connect = require('gulp-connect-php')
var reload = browserSync.reload;
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var ant = require('postcss-ant');
var flexibility = require('postcss-flexibility');
var autoprefixer = require('autoprefixer');

var paths = {
	scss: './assets/scss/*.scss',
	css: './assets/css',
	php: './*.php',
};

gulp.task('sass', function () {
	
	var processors = [
		ant,
		flexibility,
		autoprefixer
	]
	
	return gulp.src(paths.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest(paths.css))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('serve', ['sass'], function () {

	connect.server({}, function () {
		browserSync({
			proxy: '127.0.0.1:8000'
		});

		gulp.watch(paths.scss, ['sass']);
		gulp.watch(paths.php).on('change', reload);
	});
});

gulp.task('default', ['serve']);

var gulp        = require('gulp'),
	watch       = require('gulp-watch'),
	browserSync = require('browser-sync');

/* ============================================================
	Main tasks
   ============================================================ */

gulp.task('default', ['watch-css', 'watch-html', 'browser-sync']);

gulp.task('watch-css', function () {
	return gulp.watch('styles.css').on('change', browserSync.reload);
});

gulp.task('watch-html', function () {
	return gulp.watch(['*.html', 'components/*.html']).on('change', browserSync.reload);
});

/* ============================================================
	Browser-sync
   ============================================================ */

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./",
		}
	});
});

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', () => {
  gulp
    .src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/style'));
});

// watch task
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});

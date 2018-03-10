var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    sass = require('gulp-sass');
    imagemin = require('gulp-imagemin');
    livereload = require('gulp-livereload');

// Scripts Task
gulp.task('scripts', function() {
  gulp.src('js/*.js')
      .pipe(uglify())
      .on('error', console.error.bind(console))
      .pipe(gulp.dest('build/js'));
});

// Styles Task
gulp.task('styles', function() {
  gulp.src('css/*.scss')
      .pipe(sass({
        outputStyle: 'compressed'
      }))
      .on('error', console.error.bind(console))
      .pipe(gulp.dest('build/css'))
      .pipe(livereload());
});

// Images Task
gulp.task('images', function() {
  gulp.src('img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('build/img'));
});

// Watch Task
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('js/*js', ['scripts']);
  gulp.watch('css/*.scss', ['styles']);
  gulp.watch('img/*', ['images']);
});

// Default Task
gulp.task('default', ['scripts', 'styles', 'images', 'watch']);

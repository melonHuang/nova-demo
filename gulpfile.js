var gulp = require('gulp'),
    gulpNova = require('gulp-nova'),
    gulpRename = require('gulp-rename');

gulp.task('build-component', function() {
  // place code for your default task here
    gulp.src('*/*.html')
        .pipe(gulpNova())
        .pipe(gulpRename(function(path) {
            console.log('building component', path);
            path.extname = '.js';
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['build-component']);

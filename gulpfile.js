const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task("css", () => {
    return gulp.src('./src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
})

gulp.watch('./src/scss/**/*.scss',gulp.series('css'))

gulp.task('start', gulp.series('css'))
let gulp = require('gulp');
let imagemin = require('gulp-imagemin');

// Compressing images
function image() {
  return gulp.src('./images-before/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
      {removeViewBox: true},
      {cleanupIDs: false}
      ]
    })
    ]))
  .pipe(gulp.dest('./images-after'));
};
gulp.task('image', image);
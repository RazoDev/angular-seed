var gulp = require('gulp');
var gulpif = require('gulp-if');
var args = require('yargs').argv;

var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');


var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');


var del = require('del');

var src = 'src/';
var dist = 'dist/';

var tsconfig = typescript.createProject('tsconfig.json');

gulp.task('build-ts', function () {
    return gulp.src(src + 'app/**/*.ts')
        .pipe(gulpif(!args.production, sourcemaps.init()))
        .pipe(typescript(tsconfig))
        .pipe(gulpif(!args.production, sourcemaps.write()))
        .pipe(gulp.dest(dist + 'app'));
});


gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/app/css'));
});





gulp.task('build-copy', function () {
    gulp.src([src + 'app/**/*.html', src + 'app/**/*.htm'])
        .pipe(gulp.dest(dist + 'app'));

    gulp.src([src + 'index.html'])
        .pipe(gulp.dest(dist));

    return gulp.src([src + 'systemjs.config.js'])
        .pipe(gulp.dest(dist));
});

gulp.task('clean', function() {
   del(dist);
});

gulp.task('vendor', function() {
    del([dist + '/vendor/**/*']);

    gulp.src(['node_modules/@angular/**'])
        .pipe(gulp.dest(dist + 'vendor/@angular'));

    //ES6 Shim
    gulp.src('node_modules/core-js/**')
        .pipe(gulp.dest(dist + 'vendor/core-js/'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(dist + '/vendor/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(dist + '/vendor/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(dist + '/vendor/systemjs/'));
    
    // ng2-bootstrap
    gulp.src('node_modules/ng2-bootstrap/**')
        .pipe(gulp.dest(dist + '/vendor/ng2-bootstrap/'));

    // moment
    gulp.src('node_modules/moment/**')
        .pipe(gulp.dest(dist + '/vendor/moment/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(dist + '/vendor/zone.js/'));
});

gulp.task('watch', function() {
   gulp.watch(src + '**/*.ts', ['build-ts']);
   gulp.watch(src + '**/*.scss', ['sass']);
   gulp.watch(src + '**/*.{html,htm,scss}', ['build-copy']);
});

gulp.task('build', ['build-ts', 'build-copy', 'sass']);
gulp.task('default', ['build', 'watch']);
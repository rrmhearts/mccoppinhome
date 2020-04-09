"use strict";

let gulp = require('gulp'),
  babel = require('gulp-babel'),
  sass = require('gulp-sass'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  merge = require('merge-stream'),
  htmlreplace = require('gulp-html-replace'),
  htmlmin = require('gulp-htmlmin'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create();

// Clean task
gulp.task('clean', function() {
  return del([
    'dist',
    './assets/css/app.css',
    './assets/fonts'
  ]);
});

// Copy font-awesome from node_modules into /fonts
gulp.task('fonts', function() {
  return  gulp.src([
    './node_modules/font-awesome/**/*',
    '!./node_modules/font-awesome/{less,less/*}',
    '!./node_modules/font-awesome/{sass,sass/*}',
    '!./node_modules/font-awesome/.*',
    '!./node_modules/font-awesome/*.{txt,json,md}'
  ])
    .pipe(gulp.dest('./assets/fonts/font-awesome'))
});

gulp.task('build', function() {
  var fontStream = gulp.src(['./assets/fonts/font-awesome/**/*.*'])
    .pipe(gulp.dest('./dist/assets/fonts/font-awesome'));
  return fontStream;
})

// Compile sass(SASS) files
gulp.task('sass', function compilesass() {
  return gulp.src(['./assets/sass/*.sass'])
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets/css'))
});

// Minify CSS
gulp.task('css:minify', gulp.series('sass', function cssMinify() {
  return gulp.src("./assets/css/app.css")
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.stream());
}));

// Minify Js
gulp.task('js:minify', function () {
  return gulp.src([
    './assets/js/app.js'
  ])
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(browserSync.stream());
});

// Replace HTML block for Js and Css file upon build and copy to /dist
gulp.task('replaceHtmlBlock', function () {
  return gulp.src(['*.html'])
    .pipe(htmlreplace({
      'js': 'assets/js/app.min.js',
      'css': 'assets/css/app.min.css'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minihtml', () => {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
})

// Configure the browserSync task and watch file path for change
gulp.task('dev', function browserDev(done) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch(['assets/sass/*.sass','assets/sass/**/*.sass'], gulp.series('css:minify', function cssBrowserReload (done) {
    browserSync.reload();
    done(); //Async callback for completion.
  }));
  gulp.watch('assets/js/app.js', gulp.series('js:minify', function jsBrowserReload (done) {
    browserSync.reload();
    done();
  }));
  gulp.watch(['*.html']).on('change', browserSync.reload);
  done();
});

// Build task
gulp.task("build", gulp.series(gulp.parallel('css:minify', 'js:minify', 'fonts'), 'build', function copyAssets() {
  return gulp.src([
    '*.html',
    'favicon.png',
    "assets/images/**"
  ], { base: './'})
    .pipe(gulp.dest('dist'));
}));

// Default task
gulp.task("default", gulp.series("clean", 'build', 'replaceHtmlBlock', 'minihtml'));
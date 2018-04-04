const constants = require('./constants')
const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const ts = require('gulp-typescript')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const chalk = require('chalk')
const log = console.log

export default () =>
    gulp
        .src(constants.paths.sass.custom, { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(constants.paths.sass.out))
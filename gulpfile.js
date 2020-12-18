var { task, watch, series, dest, src } = require('gulp')
var sass = require('gulp-sass')

sass.compiler = require('node-sass')

var src_ = ['./src/sass/**/*.scss', './src/sass/*.scss']
var dist = './public/styles'

task('sass', function () {
    return src(src_)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(dist))
})

task('default', function () {
    watch(src_, series('sass'))
})

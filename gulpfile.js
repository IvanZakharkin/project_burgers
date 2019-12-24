
const {src, dest, task, series, watch} = require("gulp");
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const gcmq = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const reload = browserSync.reload;

task ("copy:html", () => {
    return src("src/index.html")
    .pipe(dest("dist"))
    .pipe(reload({ stream: true }));;
});
task ("copy:all", () => {
    return src("dist/**/*").pipe(dest("./"));
});



task ('clean', () => {
    return src("dist/*", { read: false })
      .pipe(rm())
});
task ('clean:main', () => {
    return src(["./index.html","./main.css", "./main.js"],{ read: false })
      .pipe(rm())
});


const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/css/main.scss'
   ];

task("styles", () => {
    return src(styles)
    .pipe(concat('main.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
      }))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(dest('./'))
    // .pipe(reload({ stream: true }));;
})

const scripts = [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/jquery-touchswipe/jquery.touchSwipe.min.js',
    'node_modules/mobile-detect/mobile-detect.min.js',
    'src/js/*.js'
]

task("scripts", () => {
    return src(scripts)
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('./'))
    .pipe(reload({ stream: true }));;
})


task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false
    });
});

// watch('./src/css/**/*.scss', series('styles'));
// watch('./src/js/**/*.js', series('scripts'));
task("default", series('clean','copy:html', 'styles', 'scripts', 'copy:all'));
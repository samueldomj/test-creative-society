import gulp, { on } from 'gulp'
import plumber from 'gulp-plumber'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import imagemin from 'gulp-imagemin'

// Instancia del servidor de desarrollo
const server = browserSync.create()

// Plugins cssnano
const cssPlugins = [
    cssnano(),
    autoprefixer()
]

// Tarea para los estilos
gulp.task('styles', () => {
    return gulp.src('./src/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(postcss(cssPlugins))
        .pipe(gulp.dest('./public/css'))
        .pipe(server.stream())
})

// Minificación de imagenes
gulp.task('imgmin', () => {
    return gulp.src('./src/assets/**')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 30, progressive: true }),
            imagemin.optipng({ optimizationLevel: 1 })
        ]))
        .pipe(gulp.dest('./public/assets'))
})

// Watchers (vigilantes) para vigilar los cambios y mostrarlos en tiempo real
gulp.task('default', () => {
    // Iniciación del servidor
    server.init({
        server: './'
    })

    // HTML
    gulp.watch('./*.html').on('change', server.reload)

    // Scss
    gulp.watch('./src/scss/**/*.scss', gulp.series('styles'))
})

var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create()
autoprefixer = require("autoprefixer"),
cssimport = require("postcss-import"),
postcss = require("gulp-postcss"),
nested = require("postcss-nested"),
cssvars = require("postcss-simple-vars"),
webpack = require("webpack");

gulp.task("watch", function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "App"
        }
    });

    watch("./app/index.html", function () {
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", gulp.series('cssInject', function(done) {
        done();
    }));

    watch("./app/assets/scripts/**/*.js", function() {
        scripts();
        scriptsRefresh();
    });
});

gulp.task('cssInject', gulp.series('styles', function() {
    return gulp.src("./app/assets/styles/styles.css").pipe(browserSync.stream());
}));

function scripts() {
    webpack(require("../../webpack.config.js"), function (err, stats) {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
    });
}

function scriptsRefresh() {
    browserSync.reload();
}

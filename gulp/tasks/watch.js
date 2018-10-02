var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create()
autoprefixer = require("autoprefixer"),
cssimport = require("postcss-import"),
postcss = require("gulp-postcss")
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

    watch("./app/assets/styles/**/*.css", function () {
        styles();
        cssInject();
    });

    watch("./app/assets/scripts/**/*.js", function() {
        scripts();
        scriptsRefresh();
    });
});

function cssInject() {
    return gulp.src("./app/assets/styles/styles.css").pipe(browserSync.stream());
}

function styles() {
    console.log("nice");
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, autoprefixer]))
        .on("error", function (errorinfo) {
            console.log(errorinfo.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
}
    

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

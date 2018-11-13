# Car modification application

https://car-app.surge.sh/

 A project I made with:

- HTML
- CSS (postCSS, BEM)
- JavaScript
- Gulp
- NPM
- Webpack

To install the necessary dependencies, execute 'npm install' inside your command line when you are inside inside the root folder of this project.

This repo consists of the following parts:

- App folder - Development version of this app. You can run it locally by executing 'gulp watch' insude the command line (inside root folder of this project).

- Dist folder - Production-build which you can also find at https://car-app.surge.sh/. To make a production build yourself, you can execute 'gulp build' inside the command line. The result can be found inside the 'dist' folder.
During the build process a number of optimalisations take place. Only the much needed files from the development version are copied and both JavaScript and CSS files are minifed (uglify and cssnano).
In addition, the JS and CSS get a version-number in their name. This ensures that the user always has the latest version of the app, without he/she needing to to clean his/her cache (gulp-rev).
Furthermore, images are reduced in size (gulp-imagemin). This optimization does not apply to this project, because no images are used. With possible extension of the app, this could be applicable.
- Gulp folder – Contains gulp tasks that are required in gulpfile.js
- Screenshots folder - Screenshot that is used inside README.md.

![alt text](https://github.com/HansG26/car-application-kunstmaan/blob/master/screenshots/Screenshot%20application.png)

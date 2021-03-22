const config = require('./config');
const js = require('./tasks/js').js(config.localServerProjectPath);
const sass = require('./tasks/sass').sass(config.localServerProjectPath, config.files.sass);
const { watch, series } = require('gulp');

js.displayName = 'js';
sass.displayName = 'sass';

// const hello = function (done) {
//     console.log(`Groeten van ${config.voornaam}!`)
//     done();
// }

const watchFiles = () => {
    watch(['./js/*.js', './features/**/*.scss'],series(js));
    watch(['./css/*.scss', './features/**/*.scss'], series(sass));
};

exports.watch = watchFiles;
exports.js = js;



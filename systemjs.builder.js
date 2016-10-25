var path = require('path');
var Builder = require('systemjs-builder');
var del = require('del');

var builder = new Builder('dist', 'src/systemjs.config.js');

builder.bundle('app/main.js', './dist/app/main.js', { minify: true, encodeNames: false })
    .then(function() {
        del(['./dist/app/**/*.js', '!./dist/app/main.js']).then(function(paths) {
            console.log('Deleted files and folders:\n', paths.join('\n'));
        });
    })
    .catch(function(err) {
        console.log('Build error!');
        console.log(err);
    });
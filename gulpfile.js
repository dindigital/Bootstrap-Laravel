var gulp = require('gulp');
var elixir = require('laravel-elixir');
var path = 'public/assets';
var bower = '../bower_components';
var tinypng = require('gulp-tinypng-compress');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// CSS

 elixir(function(mix) {
   mix.sass([
     bower + '/normalize.css/normalize.css',
     bower + '/slicknav/dist/slicknav.min.css',
     bower + '/font-awesome/css/font-awesome.min.css',
   ] , path + '/css/vendor.css');
 });

 elixir(function(mix) {
   mix.sass([
     'app.scss',
   ] , path + '/css/app.css');
 });

 // elixir(function(mix) {
 //   mix.sass([
 //     bower + 'plugin/just-in-home-page/home.min.css',
 //   ] , path + '/css/vendor-home.css');
 // });

 elixir(function(mix) {
   mix.sass([
     'home.scss',
   ] , path + '/css/home.css');
 });


// SCRIPTS

elixir(function(mix) {
 mix.scripts([
   bower + '/slicknav/dist/jquery.slicknav.min.js',
   bower + '/jquery-1.9.1/index.js',
 ] , path + '/js/vendor.js');
});

elixir(function(mix) {
 mix.scripts([
   bower + '/modernizr/modernizr.js'
 ] , path + '/js/modernizr.js');
});

elixir(function(mix) {
 mix.scripts([
   'app.js',
 ] , path + '/js/app.js');
});

// HOME

// elixir(function(mix) {
// mix.scripts([
//   bower + '/bxslider-4/dist/jquery.bxslider.min.js',
// ] , path + '/js/vendor-home.js');
// });

elixir(function(mix) {
mix.scripts([
  // bower + '/bxslider-4/dist/jquery.bxslider.min.js',
  'home.js',
] , path + '/js/home.js');
});

// END HOME

// TINY PNG - compactando imagens
gulp.task('tiny', function () {
  gulp.src('./resources/assets/images/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'e-LFigXOJXuxlObKAsukPhYwjvwbRQBu',
      sigFile: './resources/assets/images/.tinypng-sigs',
      log: true
    }))
    .pipe(gulp.dest('./public/assets/img'));
});

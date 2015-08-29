var elixir = require('laravel-elixir');
var path = 'public/assets';
var bower = '../bower_components';

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
     bower + '/slicknav/dist/slicknav.min.css',
     bower + '/font-awesome/css/font-awesome.min.css',
     'app.scss',
   ] , path + '/css/app.css');
 });

 elixir(function(mix) {
   mix.sass([
     'home.scss',
   ] , path + '/css/home.css');
 });


// SCRIPTS

elixir(function(mix) {
 mix.scripts([
   bower + '/slicknav/dist/jquery.slicknav.min.js',
   'app.js',
 ] , path + '/js/app.js');
});

elixir(function(mix) {
mix.scripts([
  bower + '/bxslider-4/dist/jquery.bxslider.min.js',
  'home.js',
] , path + '/js/home.js');
});

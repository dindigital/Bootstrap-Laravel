;(function( window, document, $, undefined ) {
  'use strict';

  var app = (function() {

    var $private = {};
    var $public = {};

    $public.responsiveMenu = function() {
      $('#menu').slicknav({
        prependTo:'.responsive-nav'
      });
    };

    return $public;
  })();

  // Global
  window.app = app;
  // app.responsiveMenu();

})( window, document, jQuery );

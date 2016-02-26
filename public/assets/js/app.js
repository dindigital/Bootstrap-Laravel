;(function( window, document, $, undefined ) {
  'use strict';

  var app = (function() {

    var $private = {};
    var $public = {};
    var screen_width = $(window).width();

    $public.callApp = function() {
      console.log('App called!');
    }

    $public.responsiveMenu = function() {
      $('#main-menu').slicknav({
        prependTo : '.responsive-nav',
        label : ''
      });
    };

    return $public;
  })();

  // Global
  window.app = app;
  app.callApp();
  app.responsiveMenu();

})( window, document, jQuery );

$(window).load(function() {
});

//# sourceMappingURL=app.js.map

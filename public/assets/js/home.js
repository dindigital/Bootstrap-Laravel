;(function( window, document, $, undefined ) {
  'use strict';

  var home = (function() {

    var $private = {};
    var $public = {};
    var screen_width = $(window).width();

    $public.callHome = function() {
      console.log('Home called!');
    };

    return $public;
  })();

  // Global
  window.home = home;
  home.callHome();

})( window, document, jQuery );

$(window).load(function() {
});

//# sourceMappingURL=home.js.map

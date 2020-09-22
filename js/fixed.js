(function () {
  
  var msie6 = $.browser == 'msie' && $.browser.version < 7;
  
  if (!msie6) {
    var top = $('.video').offset().top - parseFloat($('.video').css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var y = $(this).scrollTop();
      var windowWidth = $(window).width();
      
      // whether that's below the form
      if (y >= top  && (windowWidth > 767)) {
        // if so, add the fixed class
        $('.video').addClass('fixed');
        $('.infographic').addClass('fixed');
        $('.video iframe').addClass('fixed');
      } else {
        // otherwise remove it
        $('.video').removeClass('fixed');
        $('.infographic').removeClass('fixed');
        $('.video iframe').removeClass('fixed');
      }
    });
  }  
});
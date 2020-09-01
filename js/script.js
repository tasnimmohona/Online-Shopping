    //navbar
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      } else {
          $('#navbar_top').removeClass("fixed-top");
          // remove padding top from body
          $('body').css('padding-top', '0');
      }
  });

  //search
  $(".search").click(function() {
      $(".text").slideToggle();
  });
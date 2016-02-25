$( document ).ready(function() {
//Variables
  var mainbottom = $('#Jumbo').offset().top + $('#Jumbo').height();
// Functions
  $(window).on('scroll',function(){

      var stop = Math.round($(window).scrollTop());
      if (stop > mainbottom) {
          $('nav').addClass('OnProcess');
      } else {
          $('nav').removeClass('OnProcess');
      }

  });
});

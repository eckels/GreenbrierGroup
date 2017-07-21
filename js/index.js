$(document).ready(function(){
  var myWidth = $(window).width();
  var myHeight = $(window).height();
  var headerHeight = $('#header').height();
  if (myWidth <= 650 || headerHeight > myHeight) {
    $("#header").css('height',$(window).height());
  }

  var capsule = $('.capsule').length;
  var i = 0;
  var delayCounter = 0;
  while (i < capsule) {
    document.getElementsByClassName('capsule')[i].setAttribute("data-aos-delay", delayCounter);
    i++
    if (i % 4 == 0 && $(window).width() >= 1120) {
      delayCounter = 0;
    }
    if (i % 3 == 0 && $(window).width() <= 1120 && $(window).width() > 600) {
      delayCounter = 0;
    }
    if (i % 2 == 0 && $(window).width() <= 600 && $(window).width() > 375) {
      delayCounter = 0;
    }
    if ($(window).width() <= 375) {
      delayCounter = 0;
    }
    delayCounter = delayCounter + 150;
  }

  var hr = $('hr').length;
  var hrElem = document.getElementsByTagName('hr')[hr - 1];
  hrElem.remove();

});

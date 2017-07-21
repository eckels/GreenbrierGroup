$(document).ready(function(){
  var myHeight = $(window).height();
  myHeight = myHeight / 2;
  $('header').css('height', myHeight);
  var marg = - myHeight * (4 / 5);
  $('.full-wrapper-div').css('margin-top', marg);

  if ($(window).width() <= 990) {
    document.getElementsByClassName('blog-wrapper')[0].removeAttribute("data-aos");
  }

  var hr = $('hr').length;
  var hrElem = document.getElementsByTagName('hr')[hr - 1];
  hrElem.remove();
});

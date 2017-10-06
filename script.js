$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
$('.playButton').on("click", function() {
  var current = $(this).parent().parent().parent();
  var others = $(current).siblings();

  $(current).removeClass("home").addClass("hidden");
  $(others).removeClass("hidden").addClass("video");

  $('#alma').get(0).play();
});
$('.pauseButton').on("click", function() {
  $('#alma').get(0).pause();
});
$('.playVideo').on("click", function() {
  $('#alma').get(0).play();
});
$('#backtohome').on("click", function() {
  $('#video').removeClass("video").addClass("hidden");
  $('#home').removeClass("hidden").addClass("home");
});

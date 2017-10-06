$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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

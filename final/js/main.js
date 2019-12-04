$(document).ready(function() {


  $('#myCarousel').on('slide.bs.carousel', function(e) {
    console.log(e);
  })


})

$(window).on('load', function() {
  $('#myCarousel').carousel({
    interval: 5000
  });

  $('#myModal').modal({
    backdrop: false,
    keyboard: false
  });
})

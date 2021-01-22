$('.carousel').carousel({
    interval: false
})



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:200,
  dots: false,
})


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.right').click(function() {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.left').click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
})
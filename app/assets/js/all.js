const menu = document.querySelector('.header-mobile-menu');



// swiper part
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop:true,
  coverflowEffect: {
    rotate: 0,
    stretch: -150,
    depth: 600,
    modifier: 1,
    scale:0.9,
    slideShadows: false,
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
    },
    320:{
      slidesPerView:1,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
});

//masonry

// var $grid = $('.grid1').imagesLoaded( function() {
//   // init Masonry after all images have loaded
//   $grid.masonry({
//     itemSelector: '.grid-item',
//   // use element for option
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//     horizontalOrder: true,
//     gutter:20,
//   });
// });
var $grid = $('.grid1').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter:24
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
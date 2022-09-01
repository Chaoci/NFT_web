"use strict";

var menu = document.querySelector('.header-mobile-menu'); // swiper part

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -150,
    depth: 600,
    modifier: 1,
    scale: 0.9,
    slideShadows: false
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map

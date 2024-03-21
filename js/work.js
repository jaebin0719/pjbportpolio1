$(document).ready(function () {
  // 스와이퍼
  var swiper = new Swiper(".workSwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    cssMode: true,
    loop: true,
    resistance: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1025: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
      },
    },
  });
});

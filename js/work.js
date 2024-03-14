$(document).ready(function () {
  // 스와이퍼
  var swiper = new Swiper(".workSwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });
  //
});

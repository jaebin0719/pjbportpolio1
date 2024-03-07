$(document).ready(function () {
  let swiperSliderSimpleA = new Swiper(".slider-simple-a.swiper-container", {
    navigation: {
      nextEl: ".swiper-container.slider-simple-a .slider-next",
      prevEl: ".swiper-container.slider-simple-a .slider-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 20,
    slidesPerView: "auto",

    centeredSlides: true,
    speed: 600,
    // centeredSlidesBounds: true,
  });
});

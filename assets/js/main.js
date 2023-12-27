const swiper = new Swiper(".header__slider-items", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: "fade",
});

const collectionSwiper = new Swiper(".collection__swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".collection-button-next",
    prevEl: ".collection-button-prev",
  },
});

const releasesSwiper = new Swiper(".releases__swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".releases-button-next",
    prevEl: ".releases-button-prev",
  },
});
"use strict";

const servicesSwiper = document.querySelector(".services__swiper");

if (servicesSwiper) {
  const swiper = new Swiper(".services__swiper", {
    observer: true,
    observeParents: true,
    speed: 800,
    loop: true,
    watchOverflow: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

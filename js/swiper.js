'use strict'

const servicesSwiper = document.querySelector('.services__swiper')

if (servicesSwiper) { 
   const swiper = new Swiper('.services__swiper', {
   loop: true,

    pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
 });
}



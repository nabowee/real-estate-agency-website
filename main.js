import "/scss/style.scss";

const swiper = new Swiper(".mySwiper", {
  // speed: 1000,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  // },
  // fade: {
  //   crossFade: true,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//

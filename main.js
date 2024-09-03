import "/scss/style.scss";

//header slider
const headerSlider = new Swiper(".header-slider", {
  speed: 800,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  // },

  navigation: {
    nextEl: ".header-slider__btn--next",
    prevEl: ".header-slider__btn--prev",
  },
});
//

// getting header height for styling purpose
const headerTopSect = document.querySelector(".header-top__wrapper");
document.documentElement.style.setProperty("--header-top-height", `${headerTopSect.offsetHeight}px`);

//
// gallery tabs
//

const galleryTabBtn = document.querySelectorAll(".gallery__tabBtn");
const galleryTabs = document.querySelectorAll(".gallery__tab");

galleryTabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    galleryTabBtn.forEach((btn) => btn.classList.remove("gallery__tabBtn--active"));
    btn.classList.add("gallery__tabBtn--active");

    galleryTabs.forEach((tab) => {
      tab.classList.remove("gallery__tab--active");

      if (tab.id === btn.getAttribute("data-id")) {
        tab.classList.add("gallery__tab--active");
      }
    });
  });
});

// gallery mobile slider

let swiper;

function initSwiper() {
  swiper = new Swiper(".gallerySlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
}
const progressBar = document.querySelector(".swiper-pagination-progressbar");

progressBar.addEventListener("click", function (event) {
  const progressBarRect = progressBar.getBoundingClientRect();
  const clickPositionX = event.clientX - progressBarRect.left;
  const progressBarWidth = progressBarRect.width;
  const clickRatio = clickPositionX / progressBarWidth;
  const slideToIndex = Math.round(clickRatio * (swiper.slides.length - 1));

  swiper.slideTo(slideToIndex);
});

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    if (!swiper) {
      initSwiper();
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

// review slider
const reviewSlider = new Swiper(".review__slider-container", {
  speed: 800,
  loop: true,

  navigation: {
    nextEl: ".review__slider-button-next",
    prevEl: ".review__slider-button-prev",
  },
});

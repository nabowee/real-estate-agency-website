import "/scss/style.scss";

//
//header 
//

//slider
const headerSlider = new Swiper(".header-slider", {
  speed: 800,
  loop: true,
  spaceBetween: 30,
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


// menu

const menuOpenBtn = document.querySelector("#menuOpenBtn")
const menuCloseBtn = document.querySelector("#menuCloseBtn")
const headerMenu = document.querySelector(".menu")

menuOpenBtn.addEventListener("click", () => {
  headerMenu.classList.add("menu--active")
  menuOpenBtn.setAttribute('disabled', 'true');
})
menuCloseBtn.addEventListener("click", () => {
  headerMenu.classList.remove("menu--active")
  menuOpenBtn.removeAttribute('disabled');
})


//
// gallery 
//

//tabs

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
      el: ".gallery__progressbar",
      type: "progressbar",
    },
  });
}
const progressBar = document.querySelector(".gallery-swiper-pagination-progressbar");

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
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".review__slider-button-next",
    prevEl: ".review__slider-button-prev",
  },
});

// plans slider
const plansSlider = new Swiper(".plans__slider", {
  speed: 800,
  spaceBetween: 30,

  scrollbar: {
    el: ".plans__slider-scrollbar",
    draggable: true,
  },
});

//plans exclusive form
const exclusiveForm = document.querySelector("#exclusiveForm")

exclusiveForm.addEventListener("submit", (e) => {
  e.preventDefault();
})


//
// infrastructure
//

let infrastructureSlicer = new Swiper('.infrastructure__slider', {
  speed: 800,
  spaceBetween: 30,

  scrollbar: {
    el: ".infrastructure__slider-scrollbar",
    draggable: true,
  },

});

//
//map
//

// AIzaSyCAPrbDmEfz2GJaM5DyGo7kNQrWvNxtc90

let map;
function initMap() {

  const markers = [
    {
      lat: 36.512458,
      lng: -4.8273608
    }
  ]

  const pin = {
    url: "/public/img/map-pin.png",
    scaledSize: new google.maps.Size(25, 25)
  }

  const centerMap = {
    lat: 36.5124555,
    lng: -4.8280153
  }

  const mapOption = {
    center: centerMap,
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
  }

  map = new google.maps.Map(document.getElementById('map'), mapOption)


  const marker = new google.maps.Marker({
    position: { lat: markers[0]['lat'], lng: markers[0]['lng'] },
    map: map,
    icon: pin
  })
}

initMap()



//request form
const requestACall = document.querySelector("#requestACall")
const requestCloseBtn = document.querySelector("#requestACallCloseBtn")
const headerRequestOpen = document.querySelector(".header-top__btn")

headerRequestOpen.addEventListener("click", () => {
  requestACall.classList.add("requestACall--active")
  document.body.classList.add("noscroll")
})
requestCloseBtn.addEventListener("click", () => {
  requestACall.classList.remove("requestACall--active")
  document.body.classList.remove("noscroll")
})
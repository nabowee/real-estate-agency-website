(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}})();new Swiper(".header-slider",{speed:800,loop:!0,spaceBetween:30,navigation:{nextEl:".header-slider__btn--next",prevEl:".header-slider__btn--prev"}});const _=document.querySelector(".header-top__wrapper");document.documentElement.style.setProperty("--header-top-height",`${_.offsetHeight}px`);const c=document.querySelector("#menuOpenBtn"),h=document.querySelector("#menuCloseBtn"),o=document.querySelector(".menu");function m(){o.classList.remove("menu--active"),c.removeAttribute("disabled")}function y(){o.classList.add("menu--active"),c.setAttribute("disabled","true")}c.addEventListener("click",y);h.addEventListener("click",m);c.addEventListener("keydown",e=>{e.key==="Enter"&&y()});document.addEventListener("keydown",e=>{e.key==="Escape"&&o.classList.contains("menu--active")&&m()});document.addEventListener("click",e=>{!o.contains(e.target)&&!c.contains(e.target)&&o.classList.contains("menu--active")&&m()});const f=document.querySelectorAll(".gallery__tabBtn"),L=document.querySelectorAll(".gallery__tab");f.forEach(e=>{e.addEventListener("click",()=>{f.forEach(n=>n.classList.remove("gallery__tabBtn--active")),e.classList.add("gallery__tabBtn--active"),L.forEach(n=>{n.classList.remove("gallery__tab--active"),n.id===e.getAttribute("data-id")&&n.classList.add("gallery__tab--active")})})});let s;function E(){s=new Swiper(".gallerySlider",{slidesPerView:1,spaceBetween:10,pagination:{el:".gallery__progressbar",type:"progressbar"}})}const v=document.querySelector(".gallery-swiper-pagination-progressbar");v.addEventListener("click",function(e){const n=v.getBoundingClientRect(),u=e.clientX-n.left,d=n.width,t=u/d,r=Math.round(t*(s.slides.length-1));s.slideTo(r)});function b(){window.innerWidth<768?s||E():s&&(s.destroy(!0,!0),s=void 0)}b();window.addEventListener("resize",b);new Swiper(".review__slider-container",{speed:800,spaceBetween:30,loop:!0,navigation:{nextEl:".review__slider-button-next",prevEl:".review__slider-button-prev"}});new Swiper(".plans__slider",{speed:800,spaceBetween:30,scrollbar:{el:".plans__slider-scrollbar",draggable:!0}});const q=document.querySelector("#exclusiveForm");q.addEventListener("submit",e=>{e.preventDefault()});new Swiper(".infrastructure__slider",{speed:800,spaceBetween:30,scrollbar:{el:".infrastructure__slider-scrollbar",draggable:!0}});mapboxgl.accessToken="pk.eyJ1IjoibmFib3dlZSIsImEiOiJjbTB3cWdveXAwNGFjMmlweWQ5cm96c2RsIn0.dXkGDJG7xNkcWngVdUBueg";const S=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v11",center:[-4.828,36.51256],zoom:16}),B=[{lng:-4.828,lat:36.51256,address:"Calle Green, Marbella, Spain"}],a=document.createElement("div");a.style.backgroundImage='url("./img/map-pin.png")';a.style.width="25px";a.style.height="25px";a.style.backgroundSize="100%";B.forEach(e=>{const n=`https://www.google.com/maps?q=${encodeURIComponent(e.address)}`;new mapboxgl.Marker(a).setLngLat([e.lng,e.lat]).setPopup(new mapboxgl.Popup({offset:25}).setText(e.address).setHTML(`
      <p>${e.address}</p>
      <a class="map-link" href="${n}" target="_blank">View on Google Maps</a>
    `)).addTo(S)});const i=document.querySelector("#requestACall"),k=document.querySelector("#requestACallCloseBtn"),l=document.querySelector(".header-top__btn");function g(){i.classList.remove("requestACall--active"),l.removeAttribute("disabled")}function w(){i.classList.add("requestACall--active"),l.setAttribute("disabled","true")}l.addEventListener("click",w);k.addEventListener("click",g);l.addEventListener("keydown",e=>{e.key==="Enter"&&w()});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("requestACall--active")&&g()});document.addEventListener("click",e=>{!i.contains(e.target)&&!l.contains(e.target)&&i.classList.contains("requestACall--active")&&g()});const x=document.querySelector("#footerMenuOpenBtn"),A=document.querySelector(".footer-top__nav2");function M(){A.classList.toggle("footer-top__nav2--active")}x.addEventListener("click",M);

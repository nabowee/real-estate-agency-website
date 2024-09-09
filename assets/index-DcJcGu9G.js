(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();new Swiper(".header-slider",{speed:800,loop:!0,spaceBetween:30,navigation:{nextEl:".header-slider__btn--next",prevEl:".header-slider__btn--prev"}});const m=document.querySelector(".header-top__wrapper");document.documentElement.style.setProperty("--header-top-height",`${m.offsetHeight}px`);const a=document.querySelector("#menuOpenBtn"),g=document.querySelector("#menuCloseBtn"),p=document.querySelector(".menu");a.addEventListener("click",()=>{p.classList.add("menu--active"),a.setAttribute("disabled","true")});g.addEventListener("click",()=>{p.classList.remove("menu--active"),a.removeAttribute("disabled")});const c=document.querySelectorAll(".gallery__tabBtn"),h=document.querySelectorAll(".gallery__tab");c.forEach(s=>{s.addEventListener("click",()=>{c.forEach(t=>t.classList.remove("gallery__tabBtn--active")),s.classList.add("gallery__tabBtn--active"),h.forEach(t=>{t.classList.remove("gallery__tab--active"),t.id===s.getAttribute("data-id")&&t.classList.add("gallery__tab--active")})})});let l;function v(){l=new Swiper(".gallerySlider",{slidesPerView:1,spaceBetween:10,pagination:{el:".gallery__progressbar",type:"progressbar"}})}const d=document.querySelector(".gallery-swiper-pagination-progressbar");d.addEventListener("click",function(s){const t=d.getBoundingClientRect(),o=s.clientX-t.left,n=t.width,e=o/n,r=Math.round(e*(l.slides.length-1));l.slideTo(r)});function f(){window.innerWidth<768?l||v():l&&(l.destroy(!0,!0),l=void 0)}f();window.addEventListener("resize",f);new Swiper(".review__slider-container",{speed:800,spaceBetween:30,loop:!0,navigation:{nextEl:".review__slider-button-next",prevEl:".review__slider-button-prev"}});new Swiper(".plans__slider",{speed:800,spaceBetween:30,scrollbar:{el:".plans__slider-scrollbar",draggable:!0}});const w=document.querySelector("#exclusiveForm");w.addEventListener("submit",s=>{s.preventDefault()});new Swiper(".infrastructure__slider",{speed:800,spaceBetween:30,scrollbar:{el:".infrastructure__slider-scrollbar",draggable:!0}});let u;function b(){const s=[{lat:36.512458,lng:-4.8273608}],t={url:"/public/img/map-pin.png",scaledSize:new google.maps.Size(25,25)},n={center:{lat:36.5124555,lng:-4.8280153},zoom:16,disableDefaultUI:!0,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]};u=new google.maps.Map(document.getElementById("map"),n),new google.maps.Marker({position:{lat:s[0].lat,lng:s[0].lng},map:u,icon:t})}b();const y=document.querySelector("#requestACall"),_=document.querySelector("#requestACallCloseBtn"),T=document.querySelector(".header-top__btn");T.addEventListener("click",()=>{y.classList.add("requestACall--active"),document.body.classList.add("noscroll")});_.addEventListener("click",()=>{y.classList.remove("requestACall--active"),document.body.classList.remove("noscroll")});

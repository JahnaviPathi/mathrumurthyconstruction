let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});


var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false
   },
   breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
   },
});


// var swiper = new Swiper(".logo-slider", {
//    loop: true,
//    grabCursor: true,
//    spaceBetween: 20,
//    autoplay: {
//       delay: 1000, // 1 seconds
//       disableOnInteraction: false
//    },
//    breakpoints: {
//       450: {
//          slidesPerView: 2,
//       },
//       640: {
//          slidesPerView: 3,
//       },
//       768: {
//          slidesPerView: 4,
//       },
//       1000: {
//          slidesPerView: 5,
//       },
//    },
// });

// Horizontal auto-scroll for logo-slider
const logoSlider = document.querySelector('.logo-slider .swiper-wrapper');

if (logoSlider) {
   let scrollSpeed = 1; // Change to 2 or 3 if you want it faster

   setInterval(() => {
      logoSlider.scrollLeft += scrollSpeed;
      if (logoSlider.scrollLeft + logoSlider.clientWidth >= logoSlider.scrollWidth) {
         logoSlider.scrollLeft = 0;
      }
   }, 20);
}


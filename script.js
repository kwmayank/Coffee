const menuopenButton=document.querySelector("#menu-open-button");
const menucloseButton=document.querySelector("#menu-close-button");


menuopenButton.addEventListener("click", ()=> {
     document.body.classList.toggle("show-mobile-menu")
});
//close menu when the close button is clicked//
menucloseButton.addEventListener("click", () => menuopenButton.click());

// Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
 
  loop: true,
  grabCursor:true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //responsive break points
   breakpoints: {
     0: {
          slidesPerView:1
     },
     768: {
          slidesPerView:2
     },
     1024: {
          slidesPerView:3
     }
   }

});
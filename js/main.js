const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
})

let mixer = mixitup('.car__box');

new Swiper('.swiper-container-panel', {
 
  slidesPerView: 8,
  

  breakpoints: {
    1270: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 7,
    },
    890: {
      slidesPerView: 6,
    },
    450: {
      slidesPerView: 4,
    },
    300: {
      slidesPerView: 3,
    }
  }
});

new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.car__arrow-right' ,
      prevEl: '.car__arrow-left'
    },
    slidesPerView: 4,
    freemode: true,
    breakpoints: {
      1270: {
        slidesPerView: 4,
      },
      904: {
        slidesPerView: 3,
      },
      612: {
        slidesPerView: 2,
      },
      310: {
        slidesPerView: 1,
      }
    }
});
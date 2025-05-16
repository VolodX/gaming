//=============== SWIPER-SLIDER ABOUT ================//

const swiper = new Swiper(".image-slider", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  // lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  autoplay: {
    // інтервал між прокруткою слайдів
    delay: 2000,
    // Закінчитии на останньому слайді
    stopOnLastSlide: false,
    // Відключити після ручного переключання
    // disableOnInteraction: true,
  },
  speed: 800,
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  effect: "flip",
  flipEffect: {
    // Shadow
    slideShadows: false,
    // Show only active slide
    limitRotation: true,
  },
});
//=============== SWIPER-SLIDER ABOUT ================//
const swiperGames = new Swiper(".new-games__swiper-container", {
  navigation: {
    nextEl: ".new-games__btn-next",
  },
  loop: true,
  slidesPerView: 2.7,
  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
  },
  speed: 900,
  spaceBetween: 25,
  on: {
    slideChange: function () {
      // Видаляє клас "mask-visible" з усіх слайдів при зміні слайду
      this.slides.forEach((slide) => slide.classList.remove("mask-visible"));
      // Додає клас "mask-visible" до поточного активного слайда
      this.slides[(this.activeIndex + 2) % this.slides.length].classList.add("mask-visible");
    },
  },
});,

const swiperGames = new Swiper(".new-games__swiper", {
  navigation: {
    nextEl: ".new-games__btn-next",
  },
  loop: true,
  slidesPerView: 2.7,
  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
  },
  speed: 900,
  spaceBetween: 30,
	on: {
    slideChange: function () {
      // Видаляє клас "mask-visible" з усіх слайдів при зміні слайду
      this.slides.forEach(slide => slide.classList.remove("mask-visible"));
      // Додає клас "mask-visible" до поточного активного слайда
      this.slides[(this.activeIndex + 2) % this.slides.length].classList.add("mask-visible");
    },
    // slideChange: function () {
    //   // Видаляє клас "mask-visible" з усіх слайдів при зміні слайду
    //   this.slides.forEach((slide) => slide.classList.remove("mask-visible"));
    //   // Додає клас "mask-visible" до поточного активного слайда
    //   this.slides[this.activeIndex + 2].classList.add("mask-visible");
    // },
  },
}); 

// Зупинка автопрокрутки при наведенні
swiperGames.el.addEventListener("mouseenter", function () {
  swiperGames.autoplay.stop();
});

// Відновлення автопрокрутки при знятті курсору
swiperGames.el.addEventListener("mouseleave", function () {
  swiperGames.autoplay.start();
});

// Зупинка автопрокрутки при наведенні
swiper.el.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

// Відновлення автопрокрутки при знятті курсору
swiper.el.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});

// ===OPACITY === //

// document.addEventListener("DOMContentLoaded", function () {
//   // Визначте кількість слайдів, на яких ви хочете застосувати mask
//   const numberOfSlidesWithMask = 1;

//   // Знайдіть всі слайди
//   const slides = document.querySelectorAll(".new-games__swiper-slide");

//   // Додайте клас .last-visible до кількох останніх слайдів
//   slides.forEach((slide, index) => {
//     if (index >= slides.length - numberOfSlidesWithMask) {
//       slide.classList.add("last-visible");
//     }
//   });
// });
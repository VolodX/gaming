const swiper = new Swiper(".image-slider", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  // lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: false,
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

// =============== SWIPER-GAMES ============= //

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
    resize: function () {
      if (window.innerWidth <= 1060) {
        this.params.slidesPerView = 1;
        this.update();
      } else if (window.innerWidth <= 1260) {
        this.params.slidesPerView = 2;
        this.update();
      } else {
        this.params.slidesPerView = 2.7;
        this.update();
      }
    },
    slideChange: function () {
      // Перевірка розміру екрану
      if (window.innerWidth <= 1260) {
        // Код для slideChange, коли розмір екрану менше або дорівнює 1260px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-lg"));
        this.slides[this.activeIndex + 1].classList.add("mask-visible-lg");
      } else if (window.innerWidth <= 1060) {
        // Код для slideChange, коли розмір екрану менше або дорівнює 1260px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-md"));
        this.slides[this.activeIndex].classList.add("mask-visible-md");
      } else {
        // Ваш код для slideChange, коли розмір екрану більше 1260px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-xl"));
        this.slides[(this.activeIndex + 2) % this.slides.length].classList.add("mask-visible-xl");
      }
    },
  },
});
// // Додайте медіа-запит для зміни конфігурації на розмірах екрану 1260px та менше
// const mediaQuery = window.matchMedia("(max-width: 1260px)");

// const handleMediaChange = (mediaQuery) => {
//   if (mediaQuery.matches) {
//     // Змінюємо конфігурацію для екрану 1260px та менше
//     swiperGames.params.slidesPerView = 2;
//     swiperGames.params.on.slideChange = function () {
//       // Змінюємо логіку slideChange для екрану 1260px та менше
//       this.slides.forEach((slide) => slide.classList.remove("mask-visible"));
//       this.slides[(this.activeIndex + 1) % this.slides.length].classList.add("mask-visible");
//     };

//     // Оновлюємо конфігурацію
//     swiperGames.update();
//   } else {
//     // Повертаємо конфігурацію для більших екранів
//     swiperGames.params.slidesPerView = 2.7;
//     swiperGames.params.on.slideChange = function () {
//       this.slides.forEach((slide) => slide.classList.remove("mask-visible"));
//       this.slides[(this.activeIndex + 2) % this.slides.length].classList.add("mask-visible");
//     };

//     // Оновлюємо конфігурацію
//     swiperGames.update();
//   }
// };

// ===== Зупинка автопрокрутки при наведенні ===== //

swiperGames.el.addEventListener("mouseenter", () => swiperGames.autoplay.stop());
swiperGames.el.addEventListener("mouseleave", () => swiperGames.autoplay.start());

swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());

// // Зупинка автопрокрутки при наведенні
// swiper.el.addEventListener("mouseenter", function () {
//   swiper.autoplay.stop();
// });

// // Відновлення автопрокрутки при знятті курсору
// swiper.el.addEventListener("mouseleave", function () {
//   swiper.autoplay.start();
// });

// ============= NEW-GAMES BACKGROUND ============= //
// const swiperSlides = document.querySelectorAll(".new-games__swiper-slide");

// // Додати обробник події для кожного .new-games__swiper-slide
// swiperSlides.forEach((slide) => {
//   slide.addEventListener("mouseenter", () => {
//     // Додати клас для .new-games при наведенні
//     document.querySelector(".new-games").classList.add("hovered");
//   });

//   slide.addEventListener("mouseleave", () => {
//     // Видалити клас для .new-games при знятті курсору
//     document.querySelector(".new-games").classList.remove("hovered");
//   });
// });

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
  simulateTouch: false,
  on: {
    resize: function () {
      if (window.innerWidth <= 464) {
        this.params.slidesPerView = 1;
        this.update();
      } else if (window.innerWidth <= 567) {
        this.params.slidesPerView = 2;
        this.params.spaceBetween = 18;
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
      if (window.innerWidth <= 464) {
        // Код для slideChange, коли розмір екрану менше або дорівнює 1060px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-md"));
        this.slides[this.activeIndex % this.slides.length].classList.add("mask-visible-md");
      } else if (window.innerWidth <= 567) {
        // Код для slideChange, коли розмір екрану менше або дорівнює 1260px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-md"));
        this.slides[(this.activeIndex + 1) % this.slides.length].classList.add("mask-visible-md");
      } else if (window.innerWidth <= 1260) {
        // Код для slideChange, коли розмір екрану менше або дорівнює 1260px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-lg"));
        this.slides[(this.activeIndex + 1) % this.slides.length].classList.add("mask-visible-lg");
      } else {
        // Ваш код для slideChange, коли розмір екрану більше 1260px
        this.slides.forEach((slide) => slide.classList.remove("mask-visible-xl"));
        this.slides[(this.activeIndex + 2) % this.slides.length].classList.add("mask-visible-xl");
      }
    },
  },
});

// ===== Зупинка автопрокрутки при наведенні ===== //

swiperGames.el.addEventListener("mouseenter", () => swiperGames.autoplay.stop());
swiperGames.el.addEventListener("mouseleave", () => swiperGames.autoplay.start());

swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());

//#=================== DARK MODE ===================//
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const aboutLeftElement = document.querySelector(".about__left");
  const downloadInner = document.querySelector(".download__inner");

  // Функція для встановлення темного режиму
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    aboutLeftElement.classList.add("dark-about");
    downloadInner.classList.add("download-mode");
  }

  // Функція для вимкнення темного режиму
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    aboutLeftElement.classList.remove("dark-about");
    downloadInner.classList.remove("download-mode");
  }

  // Перевірка значення localStorage при завантаженні сторінки
  if (localStorage.getItem('mode') === 'dark') {
    enableDarkMode();
    darkModeToggle.checked = true; // Позначити перемикач
  }

  // Обробник події для перемикання темного режиму
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      enableDarkMode();
      localStorage.setItem('mode', 'dark');
    } else {
      disableDarkMode();
      localStorage.removeItem('mode');
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const darkMode = document.getElementById("darkModeToggle");
//   const aboutLeft = document.querySelector(".about__left");
//   const downloadInner = document.querySelector(".download__inner");

//   darkMode.addEventListener("change", function () {
//     document.body.classList.toggle("dark-mode", darkMode.checked);
//     aboutLeft.classList.toggle("dark-about", darkMode.checked);
//     downloadInner.classList.toggle("download-mode", darkMode.checked);
//   });
// });

// '============== BURGER ==============' //
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');

// menuBtn.addEventListener('click', function() {
//   menu.classList.toggle('active');
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const navbarCheckbox = document.getElementById("navbar-checkbox");
//   const navbarContainer = document.querySelector(".navbar__container");

//   navbarCheckbox.addEventListener("change", function() {
//     if (navbarCheckbox.checked) {
//       navbarContainer.style.display = "block";
//     } else {
//       navbarContainer.style.display = "none";
//     }
//   });
// });

// const burgerMenu = document.querySelector('.burger-menu');
// const menu = document.querySelector('.menu');

// burgerMenu.addEventListener('click', function() {
// 	menu.classList.toggle('active');
// });

///=======================================//

// document.addEventListener("DOMContentLoaded", function () {
//   const burgerMenu = document.querySelector(".burger-menu");
//   const sidebar = document.querySelector(".sidebar");

//   burgerMenu.addEventListener("click", function () {
//     sidebar.classList.toggle("active");
//   });
// });

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

// document.addEventListener("DOMContentLoaded", function () {
//   const darkModeToggle = document.getElementById("darkModeToggle");

//   darkModeToggle.addEventListener("change", function () {
//     document.body.classList.toggle("dark-mode", darkModeToggle.checked);

//     // Отримати елемент .about__left
//     const aboutLeftElement = document.querySelector(".about__left");

//     // Додати або видалити клас .dark-about в залежності від стану darkModeToggle
//     if (darkModeToggle.checked) {
//       aboutLeftElement.classList.add("dark-about");
//     } else {
//       aboutLeftElement.classList.remove("dark-about");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const darkModeToggle = document.getElementById("darkModeToggle");

//   darkModeToggle.addEventListener("change", function () {
//     document.body.classList.toggle("dark-mode", darkModeToggle.checked);
//     // Перевірка, чи включений darkModeToggle і додавання або видалення класу dark-about
//     if (darkModeToggle.checked) {
//       aboutLeftElement.classList.add("dark-about");
//     } else {
//       aboutLeftElement.classList.remove("dark-about");
//     }
//   });

//   // Отримати кнопку або елемент, який викликає зміну теми
//   const toggleButton = document.getElementById("toggleButton");

//   // Отримати елемент, якому потрібно змінити фон
//   const aboutLeftElement = document.querySelector(".about-left");

//   // Додати подію на кнопку для визначення зміни теми
//   toggleButton.addEventListener("click", () => {
//     // Змінити клас для .about-left при кожному кліку на кнопку
//     aboutLeftElement.classList.toggle("dark-about");
//   });
// });

//===================//

// document.addEventListener("DOMContentLoaded", function () {
//   const darkModeToggle = document.getElementById("darkModeToggle");

//   darkModeToggle.addEventListener("change", function () {
//     document.body.classList.toggle("dark-mode", darkModeToggle.checked);
//   });
// });

// // Отримати кнопку або елемент, який викликає зміну теми
// const toggleButton = document.getElementById("toggleButton");

// // Отримати елемент, якому потрібно змінити фон
// const aboutLeftElement = document.querySelector(".about-left");

// // Додати подію на кнопку для визначення зміни теми
// toggleButton.addEventListener("click", () => {
//   // Змінити клас для .about-left при кожному кліку на кнопку
//   aboutLeftElement.classList.toggle("dark-about");
// });

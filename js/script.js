"use strict"


// ТАЙМЕР ==============================================================

// Set the date we're counting down to
var countDownDate = new Date("Jan , 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
     // document.getElementById("demo").innerHTML = days + " Дни | " + hours + " часы | "
     // + minutes + " минуты |" + seconds + " секунды |";

      document.getElementById("demo").innerHTML = days + ":"  + hours + ":"
      + minutes + ":" + seconds + "";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


// ТАЙМЕР ==============================================================

// ТАЙМЕР 2  ==============================================================
//              function countdown(dateEnd) {
//   var timer, days, hours, minutes, seconds;

//   dateEnd = new Date(dateEnd);
//   dateEnd = dateEnd.getTime();

//   if (isNaN(dateEnd)) {
//     return;
//   }

//   timer = setInterval(calculate, 1000);

//   function calculate() {
//     var dateStart = new Date();
//     var dateStart = new Date(dateStart.getUTCFullYear(),
//       dateStart.getUTCMonth(),
//       dateStart.getUTCDate(),
//       dateStart.getUTCHours(),
//       dateStart.getUTCMinutes(),
//       dateStart.getUTCSeconds());
//     var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

//     if (timeRemaining >= 0) {
//       days = parseInt(timeRemaining / 86400);
//       timeRemaining = (timeRemaining % 86400);
//       hours = parseInt(timeRemaining / 3600);
//       timeRemaining = (timeRemaining % 3600);
//       minutes = parseInt(timeRemaining / 60);
//       timeRemaining = (timeRemaining % 60);
//       seconds = parseInt(timeRemaining);


//       document.getElementById("days").innerHTML = parseInt(days, 10);
//       document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
//       document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
//       document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
//     } else {
//       return;
//     }
//   }

//   function display(days, hours, minutes, seconds) {}
// }




// countdown ('01/01/2021 00:00:00 AM');



// ТАЙМЕР 2 ==============================================================



// СЛАЙДЕР ==============================================================

// Инициализация Swiper
new Swiper('.image-slider',{
 // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
// Навигация
// Буллеты, текущее положение, прогрессбар
pagination: {
  el: '.swiper-pagination',
  // Буллеты
  clickable: true,
  // Динамические буллеты
  dynamicBullets: true,
  // Кастомные буллеты
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index +1) + '</span>';
  },

  // Скролл
  //  scrollbar: {
  //    el: '.swiper-scrollbar',
  // // Возможность перетаскивать скролл
  //  draggable: true

   

  },
   // Включение/отключение
   // Курсор перетаскивания ("Рука")
     grabCursor: true,

     // Автовысота
      autoHeight: true,

     // Количество слайдов для показа
      slidesPerView: 3,

      // Отступ между слайдами
      spaceBetween: 15,

      // Куб
      // effect: 'cube',
      // Дополнительно к КубcubeEffect: {
      //  slideShadows:true,
      //  shadow: true,
      //  shadowOffset:20,
      //  shadowScale: 0.94
      // },
      

// Эффекты переключения слайдов.
 // Эффект потока
 effect: 'coverflow',

 // Дополнение к coverflow
 coverflowEffect: {
// Угол
  rotate:20,
// Наложение
  stretch:50,
// Тень
  slideShadows:true,
 },
 });

// СЛАЙДЕР ==============================================================


// БУРГЕР ==============================================================

let menuParents = document.querySelectorAll('.menu-page__parent');
for (let index = 0; index < menuParents.length; index++) {
  const menuParent = menuParents[index];
  menuParent.addEventListener("mouseenter" , function (e) {
    menuParent.classList.add('_active');
  });
  menuParent.addEventListener("mouseleave" , function (e) {
    menuParent.classList.remove('_active');
  });
}

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click" , function (e) {
  menuPageBurger.classList.toggle('_active');
  menuPageBody.classList.toggle('_active');
});

let searchSelect = document.querySelector('.search-page__title');
let categoriesSearch = document.querySelector('.categories-search');     
searchSelect.addEventListener("click" , function (e) {
    searchSelect.classList.toggle('_active');
         categoriesSearch.classList.toggle('_active');
            // _slideToggle(categoriesSearch);
});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
  const checkboxCategory = checkboxCategories[index];
  checkboxCategory.addEventListener("click" , function (e) {
         checkboxCategory.classList.toggle('_active');

     let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

     if (checkboxActiveCategories.length > 0) {
      searchSelect.classList.add('_categories');
       let searchQuantity = searchSelect.querySelector('.search-page__quantity');
           searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
     } else {
      searchSelect.classList.remove('_categories');
     }
 });
}
// БУРГЕР ==============================================================
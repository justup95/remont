


// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)





// const menuRef = document.querySelector(".menu");
// const modalBtnRef = document.querySelector(".modal__btn");
// const burgerRef = document.querySelector(".burger");

// modalBtnRef.addEventListener("click", closeBurgerMenu);

// function closeBurgerMenu() {
//   menuRef.classList.remove("active"),
//     burgerRef.classList.remove("active-burger");
// }

const menuRef = document.querySelector(".menu");
const modalBtnRef = document.querySelector(".modal__btn");
const zamerBtnRef = document.querySelectorAll(".btn");
const burgerRef = document.querySelector(".burger");
const bodyRef = document.querySelector(".main__body");
const modalWrapperRef = document.querySelector(".modal__wrapper");

modalBtnRef.addEventListener("click", closeBurgerMenu);

zamerBtnRef.forEach((item) => {
  item.addEventListener("click", openZameMenu);
});

function openZameMenu() {
  modalWrapperRef.style.display = "flex";
  bodyRef.classList.add("locked");
}

function closeBurgerMenu() {
  menuRef.classList.remove("active"),
    burgerRef.classList.remove("active-burger");
}


// Модальное окно
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
}




// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')



//Arrow Up
let btn = document.querySelector('.arrow-top')
//
function magic() {
  if (window.pageYOffset > 20) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
  window.scrollTo(0, 0)
}

// When scrolling, we run the function
window.onscroll = magic


// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode
      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active')
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'))
        parent.classList.add('accordion__item-active')
      }
    })
  })
}
accordion()


const portfolio__hiddenBtn = document.querySelector('.portfolio__hidden-btn');
const portfolioHidden = document.querySelector('.portfolio__hidden');

portfolio__hiddenBtn.addEventListener('click', () => {
  portfolioHidden.classList.toggle('portfolio__hidden');
  portfolioHidden.classList.toggle('portfolio__visible');
});

window.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('.portfolio__gallery-video');

  videos.forEach(function (video) {
    video.addEventListener('click', function () {
      if (video.classList.contains('ready')) {
        return;
      }
      video.classList.add('ready');

      var src = video.dataset.src;

      video.insertAdjacentHTML('afterbegin', '<iframe src="'+ src +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
    
  });
});

// data-set=""
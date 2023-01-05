/* eslint-disable operator-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
let clicks = 0;
const x = document.getElementById('clicks');

function onClick() {
  clicks += 1;
  x.innerHTML = clicks;
  x.classList.add('visible');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

const navLink = document.querySelector('.menu__list');
navLink.addEventListener('click', () => {
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  body.classList.remove('lock');
});

const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 100) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();

window.onload = function () {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(() => {
    preloader.classList.add('preloader-hidden');
  }, 990);
};

function arrowMenu() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

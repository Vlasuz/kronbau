// Wow JS
if(document.querySelector('.wow')) new WOW().init();
// Wow JS

const swiper = new Swiper('.banner__slider', {
  autoplay: true,
  loop: true,
});

document.querySelector('.header__burger').onclick = () => {
	document.querySelector('.header').classList.toggle('header_active')
}

document.querySelectorAll('.header__menu a').forEach(item => item.onclick = function() {
	if(document.querySelector('.header__menu li.li_active')) document.querySelector('.header__menu li.li_active').classList.remove('li_active')
	if(document.querySelector('.header_active')) document.querySelector('.header_active').classList.remove('header_active')
	this.parentNode.classList.add('li_active')
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

var swiperWithNav = new Swiper(".text-and-slider__nav", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
   breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 5,
    },
  }
});
new Swiper(".text-and-slider__slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperWithNav,
  },
});
var swiperWithNavBig = new Swiper(".slider-nav", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
new Swiper(".slider-main", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperWithNavBig,
  },
});

document.querySelectorAll('.projects__item').forEach(item => {
  item.onclick = function () {
    if(!item.closest('.popup') || item.closest('.termin')) {
      this.querySelector('.popup').classList.add('popup_active')
    }
  }
})
document.querySelectorAll('.popup__close, .popup__bgd').forEach(item => {
  item.onclick = function () {
    setTimeout(() => {
      this.closest('.popup').classList.remove('popup_active')
    }, 10)
  }
})

document.querySelectorAll('.projects__tabs li').forEach((item, index) => {
  item.onclick = function (e, ind) {
    this.closest('ul').querySelector('.li_active').classList.remove('li_active')
    this.closest('li').classList.add('li_active')

    document.querySelector('.projects__block_active').classList.remove('projects__block_active')
    document.querySelector('.projects__block_show').classList.remove('projects__block_show')

    document.querySelectorAll('.projects__block')[index].classList.add('projects__block_active')
    setTimeout(() => {
      document.querySelectorAll('.projects__block')[index].classList.add('projects__block_show')
    }, 10)
  }
})


document.querySelectorAll('.termin').forEach(item => {
  item.onclick = function () {
    document.querySelector('.global-popup').classList.add('popup_active')
  }
})


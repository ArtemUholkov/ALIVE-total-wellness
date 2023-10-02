AOS.init();

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;
const casualLogo = document.querySelector('.logo-white');
const colorLogo = document.querySelector('.logo-color');

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');
    casualLogo.classList.remove('logo-hide');
    colorLogo.classList.add('logo-hide');
    setTimeout(() => {
      casualLogo.classList.remove('logo-hide');
      colorLogo.classList.add('logo-hide');
      // colorLogo.classList.remove('logo-hide');
      // casualLogo.classList.add('logo-hide');
    }, 270);
    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 270);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
    setTimeout(() => {
      //   casualLogo.classList.remove('logo-hide');
      // colorLogo.classList.add('logo-hide');
      colorLogo.classList.remove('logo-hide');
      casualLogo.classList.add('logo-hide');
    }, 270);
  }
  burger.classList.toggle('active');
}

function scrollToPrice() {
  document.querySelector('#price').scrollIntoView(true);
}
function scrollToAbout() {
  document.querySelector('#about').scrollIntoView(true);
}
function scrollToBenefits() {
  document.querySelector('#benefits').scrollIntoView(true);
}
function scrollToHow() {
  document.querySelector('#how').scrollIntoView(true);
}
function scrollToBefore() {
  document.querySelector('#before').scrollIntoView(true);
}
function scrollToSub() {
  document.querySelector('#sub').scrollIntoView(true);
}
let copiedText = document.querySelectorAll('#trythis');
copiedText.forEach((elem) => elem.addEventListener('click', () => copyText(elem)));
console.log(colorLogo);

function thankyou() {
  setTimeout(() => {
    window.location.href = 'thankyou.html';
  }, 2000);
}
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  }
  console.log('111');
});
//

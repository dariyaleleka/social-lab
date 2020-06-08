"use strict";

window.addEventListener('load', function () {
  console.log('All resources finished loading!');
  var Menu = {
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },
    init: function init() {
      Menu.bindUIactions();
    },
    bindUIactions: function bindUIactions() {
      Menu.el.ham.on('click', function (event) {
        Menu.activateMenu(event);
        event.preventDefault();
      });
    },
    activateMenu: function activateMenu() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
  };
  Menu.init();
});
var menuLink = document.getElementById('menu');

window.onload = function () {
  document.getElementById('menu').onclick = function () {
    openbox('main_menu', this);
    return false;
  };
};

function openbox(id, toggler) {
  var div = document.getElementById(id);
  var menuContent = document.getElementById('main_menu');

  if (div.style.opacity == '1') {
    div.style.top = '-900px';
    div.style.opacity = '0';
  } else {
    div.style.top = '70px';
    div.style.opacity = '1';
  }
} // menuLink.addEventListener('click', function(){
// let menuContent = document.getElementById('main_menu');
//   if( menuContent.style.opacity = '0'){
//     menuContent.style.top = '70px';
//     menuContent.style.opacity = '1'
//   }else{
//     menuContent.style.top = '-700px';
//     menuContent.style.opacity = '0'
//   }
// })
// let partnersBlockImg = document.querySelectorAll('.slider-pojects__item img');
// console.log(partnersBlockImg);
// for(let i=0; i<partnersBlockImg.length; i++){
//   partnersBlockImg[i].style.filter = 'grayscale(100%)'
// };
// let block = document.getElementById('main-block');
// var test = block.getElementByClassName("slider-pojects__item");//test is not target element
// for(let y=0; y < test.length; y++){
//   test[y].onmouseover = function() {
//     let partnersBlockImg = document.querySelectorAll('.slider-pojects__item img');
//     console.log(partnersBlockImg);
//     // this.partnersBlockImg.style.filter = 'grayscale(100%)'
//     console.log(this.partnersBlockImg)
//   }


window.addEventListener('load', function () {
  var button = document.querySelector('.slider__content');
  var div = document.querySelector('.image-slider');
  console.log(button);
  console.log(div);

  button.onmouseover = function (e) {
    console.log('work');
    div.style.filter = 'grayscale(0)';
  };

  div.onmouseout = function (e) {
    div.style.filter = 'grayscale(100%)';
  };
}); // let partnersBlock = document.querySelectorAll('.slider-pojects_items');
// let block = document.querySelectorAll('.slick-list div');
//   block.onmouseover = function() {
//     console.log('навели');
//  }
//  $('.slider-pojects__item').hover(
//   function(){
//       $('.image-slider').css('filter ','grayscale(0)');
//   },
//   function(){
//       $('.image-slider').css('filter ','grayscale(100%)');
//   }
// );

var block = document.getElementById('block-1');

block.onmouseover = function () {
  var image = document.getElementById('image-1');
  image.style.filter = 'grayscale(0)';
};

block.onmouseleave = function () {
  var image = document.getElementById('image-1');
  image.style.filter = 'grayscale(100%)';
};

var block2 = document.getElementById('block-2');

block2.onmouseover = function () {
  var image2 = document.getElementById('image-2');
  image2.style.filter = 'grayscale(0)';
};

block2.onmouseleave = function () {
  var image2 = document.getElementById('image-2');
  image2.style.filter = 'grayscale(100%)';
};

var block3 = document.getElementById('block-3');

block3.onmouseover = function () {
  var image3 = document.getElementById('image-3');
  image3.style.filter = 'grayscale(0)';
};

block3.onmouseleave = function () {
  var image3 = document.getElementById('image-3');
  image3.style.filter = 'grayscale(100%)';
};

var block4 = document.getElementById('block-4');

block4.onmouseover = function () {
  var image4 = document.getElementById('image-4');
  image4.style.filter = 'grayscale(0)';
};

block4.onmouseleave = function () {
  var image4 = document.getElementById('image-4');
  image4.style.filter = 'grayscale(100%)';
};

window.addEventListener('load', function () {
  $('.slider-pojects_items').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: $('.projects__arrows'),
    prevArrow: '<div class="arrow"><img src="assets/img/arrow-l.svg" alt=""></div>',
    nextArrow: '<div class="arrow"><img src="assets/img/arrow-r.svg" alt=""></div>',
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.slider_partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
      }
    }]
  });
});
//# sourceMappingURL=main.js.map

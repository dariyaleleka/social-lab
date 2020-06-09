"use strict";

var mainContainer = document.getElementById('main-container');
var hiddenBlock = document.getElementById('hidden-container');
var mainContBlock = document.getElementById('main-container-block');
var secondBlock = document.getElementById('main-container-one');
var hiddenBlockOne = document.getElementById('hidden-container-one');
var fourthBlock = document.getElementById('main-container-fourth'); // let hiddenBlockFourth = document.getElementById('hidden-container-two');

var fiveBlock = document.getElementById('main-container-five');
var hiddenBlockFive = document.getElementById('hidden-container-five');
var thirdBlock = document.getElementById('main-container-two');
var hiddenBlockTwo = document.getElementById('hidden-container-two');
var test = mainContBlock.getElementsByClassName("name");
var line = document.querySelectorAll('.move-left');
var intFrameWidth = window.innerWidth;
console.log(test); // first

document.getElementById('main-container').addEventListener("click", function () {
  openbox('hidden-container', this);
  return false;
});

function openbox(id, toggler) {
  var hiddenBlock = document.getElementById('hidden-container');
  var intFrameWidth = window.innerWidth;

  if (hiddenBlock.style.left == '100%') {
    if (intFrameWidth >= '1400') {
      hiddenBlock.style.left = '0';
      hiddenBlock.style.zIndex = '99';
      mainContainer.style.zIndex = '999';
      hiddenBlock.style.opacity = '0';
      test[0].style.right = '20px';
      line[0].style.marginRight = '20px';
    } else if (intFrameWidth >= '1200') {
      hiddenBlock.style.left = '0';
      hiddenBlock.style.zIndex = '99';
      mainContainer.style.zIndex = '999';
      hiddenBlock.style.opacity = '0';
      test[0].style.right = '20px';
      line[0].style.marginRight = '20px';
    } else {
      hiddenBlock.style.left = '0';
      hiddenBlock.style.zIndex = '99';
      mainContainer.style.zIndex = '999';
      hiddenBlock.style.opacity = '0';
      test[0].style.right = '20px';
      line[0].style.marginRight = '20px';
    }
  } else {
    if (intFrameWidth >= '1400') {
      hiddenBlock.style.left = '100%';
      hiddenBlock.style.zIndex = '9999';
      mainContainer.style.zIndex = '99999';
      hiddenBlock.style.opacity = '1';
      test[0].style.right = '-84%';
      line[0].style.marginRight = '-86%';
    } else if (intFrameWidth >= '1200') {
      hiddenBlock.style.left = '100%';
      hiddenBlock.style.zIndex = '9999';
      mainContainer.style.zIndex = '99999';
      hiddenBlock.style.opacity = '1';
      test[0].style.right = '-93%';
      line[0].style.marginRight = '-441px';
    } else if (intFrameWidth >= '900') {
      hiddenBlock.style.left = '100%';
      hiddenBlock.style.zIndex = '9999';
      mainContainer.style.zIndex = '99999';
      hiddenBlock.style.opacity = '1';
      test[0].style.right = '-93%';
      line[0].style.marginRight = '-464px';
    } else if (intFrameWidth >= '769') {
      hiddenBlock.style.left = '100%';
      hiddenBlock.style.zIndex = '9999';
      mainContainer.style.zIndex = '99999';
      hiddenBlock.style.opacity = '1';
    }
  }
} // second


document.getElementById('main-container-one').addEventListener("click", function () {
  openboxsecond('hidden-container-one', this);
  return false;
});

function openboxsecond(id, toggler) {
  var hiddenBlockOne = document.getElementById('hidden-container-one');
  var intFrameWidth = window.innerWidth;

  if (hiddenBlockOne.style.right == '100%') {
    if (intFrameWidth >= '1400') {
      hiddenBlockOne.style.right = '0';
      hiddenBlockOne.style.zIndex = '99';
      secondBlock.style.zIndex = '999';
      hiddenBlockOne.style.opacity = '0';
      test[1].style.right = '20px';
      line[1].style.right = '20px';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockOne.style.right = '0';
      hiddenBlockOne.style.zIndex = '99';
      secondBlock.style.zIndex = '999';
      hiddenBlockOne.style.opacity = '0';
      test[1].style.right = '20px';
      line[1].style.right = '20px';
    } else {
      hiddenBlockOne.style.right = '0';
      hiddenBlockOne.style.zIndex = '99';
      secondBlock.style.zIndex = '999';
      hiddenBlockOne.style.opacity = '0';
      test[1].style.right = '20px';
      line[1].style.right = '20px';
    }
  } else {
    if (intFrameWidth >= '1400') {
      hiddenBlockOne.style.right = '100%';
      hiddenBlockOne.style.zIndex = '99999';
      secondBlock.style.zIndex = '999999';
      hiddenBlockOne.style.opacity = '1';
      test[1].style.right = '105%';
      line[1].style.right = '105%';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockOne.style.right = '100%';
      hiddenBlockOne.style.zIndex = '99999';
      secondBlock.style.zIndex = '999999';
      hiddenBlockOne.style.opacity = '1';
      test[1].style.right = '105%';
      line[1].style.right = '567px';
    } else if (intFrameWidth >= '900') {
      hiddenBlockOne.style.right = '100%';
      hiddenBlockOne.style.zIndex = '99999';
      secondBlock.style.zIndex = '999999';
      hiddenBlockOne.style.opacity = '1';
      test[1].style.right = '105%';
      line[1].style.right = '567px';
    } else if (intFrameWidth >= '769') {
      hiddenBlockOne.style.right = '100%';
      hiddenBlockOne.style.zIndex = '99999';
      secondBlock.style.zIndex = '999999';
      hiddenBlockOne.style.opacity = '1'; // test[1].style.right  = '105%';
      // line[1].style.right  = '567px';
    }
  }
} // fourth


document.getElementById('main-container-fourth').addEventListener("click", function () {
  openboxFourth('hidden-container-fourth', this);
  return false;
});

function openboxFourth(id, toggler) {
  var hiddenBlockFourth = document.getElementById('hidden-container-fourth');
  var intFrameWidth = window.innerWidth;

  if (hiddenBlockFourth.style.left == '100%') {
    if (intFrameWidth >= '1400') {
      hiddenBlockFourth.style.left = '0';
      hiddenBlockFourth.style.zIndex = '99';
      fourthBlock.style.zIndex = '999';
      hiddenBlockFourth.style.opacity = '0';
      test[2].style.right = '20px';
      line[2].style.marginRight = '20px';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockFourth.style.left = '0';
      hiddenBlockFourth.style.zIndex = '99';
      fourthBlock.style.zIndex = '999';
      hiddenBlockFourth.style.opacity = '0';
      test[2].style.right = '20px';
      line[2].style.marginRight = '20px';
    } else {
      hiddenBlockFourth.style.left = '0';
      hiddenBlockFourth.style.zIndex = '99';
      fourthBlock.style.zIndex = '999';
      hiddenBlockFourth.style.opacity = '0';
      test[2].style.right = '20px';
      line[2].style.marginRight = '20px';
    }
  } else {
    if (intFrameWidth >= '1400') {
      hiddenBlockFourth.style.left = '100%';
      hiddenBlockFourth.style.zIndex = '9999';
      fourthBlock.style.zIndex = '99999';
      hiddenBlockFourth.style.opacity = '1';
      test[2].style.right = '-84%';
      line[2].style.marginRight = '-86%';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockFourth.style.left = '100%';
      hiddenBlockFourth.style.zIndex = '9999';
      fourthBlock.style.zIndex = '99999';
      hiddenBlock.style.opacity = '1';
      test[2].style.right = '-93%';
      line[2].style.marginRight = '-441px';
    } else if (intFrameWidth >= '900') {
      hiddenBlockFourth.style.left = '100%';
      hiddenBlockFourth.style.zIndex = '9999';
      fourthBlock.style.zIndex = '99999';
      hiddenBlockFourth.style.opacity = '1';
      test[2].style.right = '-93%';
      line[2].style.marginRight = '-464px';
    } else if (intFrameWidth >= '769') {
      hiddenBlockFourth.style.left = '100%';
      hiddenBlockFourth.style.zIndex = '9999';
      fourthBlock.style.zIndex = '99999';
      hiddenBlockFourth.style.opacity = '1';
    }
  }
} // five


document.getElementById('main-container-five').addEventListener("click", function () {
  openboxfive('hidden-container-fourth', this);
  return false;
});

function openboxfive(id, toggler) {
  var hiddenBlockFive = document.getElementById('hidden-container-five');
  var intFrameWidth = window.innerWidth;

  if (hiddenBlockFive.style.right == '100%') {
    if (intFrameWidth >= '1400') {
      hiddenBlockFive.style.right = '0';
      hiddenBlockFive.style.zIndex = '99';
      fiveBlock.style.zIndex = '999';
      hiddenBlockFive.style.opacity = '0';
      test[3].style.right = '20px';
      line[3].style.right = '20px';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockFive.style.right = '0';
      hiddenBlockFive.style.zIndex = '99';
      fiveBlock.style.zIndex = '999';
      hiddenBlockFive.style.opacity = '0';
      test[3].style.right = '20px';
      line[3].style.right = '20px';
    } else {
      hiddenBlockFive.style.right = '0';
      hiddenBlockFive.style.zIndex = '99';
      fiveBlock.style.zIndex = '999';
      hiddenBlockFive.style.opacity = '0';
      test[3].style.right = '20px';
      line[3].style.right = '20px';
    }
  } else {
    if (intFrameWidth >= '1400') {
      hiddenBlockFive.style.right = '100%';
      hiddenBlockFive.style.zIndex = '99999';
      fiveBlock.style.zIndex = '999999';
      hiddenBlockFive.style.opacity = '1';
      test[3].style.right = '105%';
      line[3].style.right = '105%';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockFive.style.right = '100%';
      hiddenBlockFive.style.zIndex = '99999';
      fiveBlock.style.zIndex = '999999';
      hiddenBlockFive.style.opacity = '1';
      test[3].style.right = '105%';
      line[3].style.right = '567px';
    } else if (intFrameWidth >= '900') {
      hiddenBlockFive.style.right = '100%';
      hiddenBlockFive.style.zIndex = '99999';
      fiveBlock.style.zIndex = '999999';
      hiddenBlockFive.style.opacity = '1';
      test[3].style.right = '105%';
      line[3].style.right = '567px';
    } else if (intFrameWidth >= '769') {
      hiddenBlockFive.style.right = '100%';
      hiddenBlockFive.style.zIndex = '99999';
      fiveBlock.style.zIndex = '999999';
      hiddenBlockFive.style.opacity = '1';
    }
  }
} // third


document.getElementById('main-container-two').addEventListener("click", function () {
  openboxthird('hidden-container-two', this);
  return false;
});

function openboxthird(id, toggler) {
  var hiddenBlockTwo = document.getElementById('hidden-container-two');
  var intFrameWidth = window.innerWidth;

  if (hiddenBlockTwo.style.left == '50%') {
    hiddenBlockTwo.style.left = '0';
    hiddenBlockTwo.style.zIndex = '99';
    thirdBlock.style.left = '0';
    thirdBlock.style.zIndex = '999';
    hiddenBlockTwo.style.opacity = '0';
    test[4].style.right = '20px';
    line[4].style.marginRight = '20px';
  } else {
    if (intFrameWidth >= '1400') {
      hiddenBlockTwo.style.left = '50%';
      thirdBlock.style.left = '-50%';
      hiddenBlockTwo.style.zIndex = '9999';
      thirdBlock.style.zIndex = '99999';
      hiddenBlockTwo.style.opacity = '1';
      test[4].style.right = '-84%';
      line[4].style.marginRight = '-92%';
    } else if (intFrameWidth >= '1200') {
      hiddenBlockTwo.style.left = '50%';
      thirdBlock.style.left = '-50%';
      hiddenBlockTwo.style.zIndex = '9999';
      thirdBlock.style.zIndex = '99999';
      hiddenBlockTwo.style.opacity = '1';
      test[4].style.right = '-84%';
      line[4].style.marginRight = '-560px';
    } else if (intFrameWidth >= '900') {
      hiddenBlockTwo.style.left = '50%';
      thirdBlock.style.left = '-50%';
      hiddenBlockTwo.style.zIndex = '9999';
      thirdBlock.style.zIndex = '99999';
      hiddenBlockTwo.style.opacity = '1';
      test[4].style.right = '-84%';
      line[4].style.marginRight = '-441px';
    } else if (intFrameWidth >= '769') {
      hiddenBlockTwo.style.left = '50%';
      thirdBlock.style.left = '-50%';
      hiddenBlockTwo.style.zIndex = '9999';
      thirdBlock.style.zIndex = '99999';
      hiddenBlockTwo.style.opacity = '1';
    }
  }
} // mainContainer.addEventListener("mouseover", function (){
//   if(intFrameWidth >= '1400'){
//     hiddenBlock.style.left  = '100%';
//     hiddenBlock.style.zIndex = '9999';
//     mainContainer.style.zIndex = '99999';
//     hiddenBlock.style.opacity = '1';
//     test[0].style.right = '-84%';
//     line[0].style.marginRight = '-560px';
//     // secondBlock.style.marginRight = '-50%'
//   }else{
//     hiddenBlock.style.left  = '100%';
//     hiddenBlock.style.zIndex = '9999';
//     mainContainer.style.zIndex = '99999';
//     hiddenBlock.style.opacity = '1';
//     test[0].style.right = '-84%';
//     line[0].style.marginRight = '-560px';
//     // secondBlock.style.marginRight = '-50%'
//   }
// });
// mainContainer.addEventListener("mouseleave", function (){
//   if(intFrameWidth >= '1400'){
//     hiddenBlock.style.left = '0';
//     hiddenBlock.style.zIndex = '99';
//     mainContainer.style.zIndex = '999';
//     hiddenBlock.style.opacity = '0';
//     test[0].style.right = '20px';
//     line[0].style.marginRight = '20px';
//     // secondBlock.style.marginRight = '0'
//   }else{
//     hiddenBlock.style.left = '0';
//     hiddenBlock.style.zIndex = '99';
//     mainContainer.style.zIndex = '999';
//     hiddenBlock.style.opacity = '0';
//     test[0].style.right = '20px';
//     line[0].style.marginRight = '20px';
//     // secondBlock.style.marginRight = '0'
//   }
// });
//   thirdBlock.addEventListener("mouseover", function (){
//     if(intFrameWidth >= '1400'){
//         hiddenBlockTwo.style.left  = '50%';
//         thirdBlock.style.left = '-50%';
//         hiddenBlockTwo.style.zIndex = '9999';
//         thirdBlock.style.zIndex = '99999';
//         hiddenBlockTwo.style.opacity = '1';
//         test[2].style.right = '-84%';
//         line[2].style.marginRight = '-560px';
//       // secondBlock.style.marginRight = '-50%'
//     }else{
//         hiddenBlockTwo.style.left  = '50%';
//         hiddenBlockTwo.style.zIndex = '9999';
//         thirdBlock.style.zIndex = '99999';
//         hiddenBlockTwo.style.opacity = '1';
//         test[2].style.right = '-84%';
//         line[2].style.marginRight = '-560px';
//       // secondBlock.style.marginRight = '-50%'
//     }
//   });
//   thirdBlock.addEventListener("mouseleave", function (){
//     if(intFrameWidth >= '1400'){
//         thirdBlock.style.left = '0';
//         hiddenBlockTwo.style.left = '0';
//         hiddenBlockTwo.style.zIndex = '99';
//         thirdBlock.style.zIndex = '999';
//         hiddenBlockTwo.style.opacity = '0';
//         test[2].style.right = '20px';
//         line[2].style.marginRight = '20px';
//       // secondBlock.style.marginRight = '0'
//     }else{
//         hiddenBlockTwo.style.left = '0';
//         hiddenBlockTwo.style.zIndex = '99';
//         thirdBlock.style.zIndex = '999';
//         hiddenBlockTwo.style.opacity = '0';
//         test[2].style.right = '20px';
//         line[2].style.marginRight = '20px';
//       // secondBlock.style.marginRight = '0'
//     }
//   });
// secondBlock.addEventListener("mouseover", function (){
//     if(intFrameWidth >= '1400'){
//         hiddenBlockOne.style.right= '100%';
//         hiddenBlockOne.style.zIndex = '99999';
//         secondBlock.style.zIndex = '999999';
//         hiddenBlockOne.style.opacity = '1';
//         test[1].style.right  = '105%';
//         line[1].style.right  = '750px';
//         // mainContainer.style.marginLeft = '-50%'
//     }else{
//         hiddenBlockOne.style.right = '100%';
//         hiddenBlockOne.style.zIndex = '99999';
//         secondBlock.style.zIndex = '999999';
//         hiddenBlockOne.style.opacity = '1';
//         test[1].style.right = '105%';
//         line[1].style.right = '750px';
//         // mainContainer.style.marginLeft = '-50%'
//     }
//   });
//   secondBlock.addEventListener("mouseleave", function (){
//     if(intFrameWidth >= '1400'){
//         hiddenBlockOne.style.right = '0';
//         hiddenBlockOne.style.zIndex = '99';
//         secondBlock.style.zIndex = '999';
//         hiddenBlockOne.style.opacity = '0';
//         test[1].style.right = '20px';
//         line[1].style.right = '20px';
//         // mainContainer.style.marginLeft = '0'
//     }else{
//         hiddenBlockOne.style.right = '0';
//         hiddenBlockOne.style.zIndex = '99';
//         secondBlock.style.zIndex = '999';
//         hiddenBlockOne.style.opacity = '0';
//         test[1].style.right = '20px';
//         line[1].style.right = '20px';
//         // mainContainer.style.marginLeft = '0'
//     }
//   });
//# sourceMappingURL=animation.js.map

i = 1
function next() {
  let img1 = document.querySelector(".slider-img-1");
  let img2 = document.querySelector(".slider-img-2");
  let img3 = document.querySelector(".slider-img-3");
  let i1 = document.querySelector(".i1");
  let i2 = document.querySelector(".i2");
  let i3 = document.querySelector(".i3");

  if (i == 0) {
    img1.style.zIndex = "5"
    img1.style.marginLeft = "0px"
    img1.style.transform = 'scale(1)';
    img2.style.zIndex = "4"
    img2.style.marginLeft = "50px"
    img2.style.transform = 'scale(0.95)';
    img3.style.zIndex = "3"
    img3.style.marginLeft = "100px"
    img3.style.transform = 'scale(0.9)';
    i1.classList.add('active')
    i2.classList.remove('active')
    i3.classList.remove('active')

    i += 1
  } else if (i == 1) {
    img1.style.zIndex = "4"
    img1.style.marginLeft = "100px"
    img1.style.transform = 'scale(0.9)';
    img2.style.zIndex = "5"
    img2.style.marginLeft = "0px"
    img2.style.transform = 'scale(1)';
    img3.style.zIndex = "4"
    img3.style.marginLeft = "50px"
    img3.style.transform = 'scale(0.95)';
    i1.classList.remove('active')
    i2.classList.add('active')
    i3.classList.remove('active')
    i += 1
  } else {
    img1.style.zIndex = "4"
    img1.style.marginLeft = "50px"
    img1.style.transform = 'scale(0.95)';
    img2.style.zIndex = "3"
    img2.style.marginLeft = "100px"
    img2.style.transform = 'scale(0.9)';
    img3.style.zIndex = "5"
    img3.style.marginLeft = "0px"
    img3.style.transform = 'scale(1)';
    i1.classList.remove('active')
    i2.classList.remove('active')
    i3.classList.add('active')
    i = 0
  }
};

let text1 = document.querySelector(".text-slider-1");
let textP1 = document.querySelector(".text-slider-1").querySelector("p");
let text2 = document.querySelector(".text-slider-2");
let textP2 = document.querySelector(".text-slider-2").querySelector("p");
let text3 = document.querySelector(".text-slider-3");
let textP3 = document.querySelector(".text-slider-3").querySelector("p");
let textH1 = document.querySelector(".text-h3-1");
let textH2 = document.querySelector(".text-h3-2");
let textH3 = document.querySelector(".text-h3-3");


text1.addEventListener('click', function () {
  textP1.classList.toggle("text-active");
  textP2.classList.remove("text-active");
  textP3.classList.remove("text-active");
  textH1.classList.toggle("h3-active");
  textH2.classList.remove("h3-active");
  textH3.classList.remove("h3-active");
}, false);

text2.addEventListener('click', function () {
  textP1.classList.remove("text-active");
  textP2.classList.toggle("text-active");
  textP3.classList.remove("text-active");
  textH1.classList.remove("h3-active");
  textH2.classList.toggle("h3-active");
  textH3.classList.remove("h3-active");
}, false);

text3.addEventListener('click', function () {
  textP1.classList.remove("text-active");
  textP2.classList.remove("text-active");
  textP3.classList.toggle("text-active");
  textH1.classList.remove("h3-active");
  textH2.classList.remove("h3-active");
  textH3.classList.toggle("h3-active");
}, false);

// let scrollPage = document.querySelector(".scroll");
// // scrollPage.addEventListener('click', function () {
// //   // window.scrollBy(0, 970);
// // }, false);
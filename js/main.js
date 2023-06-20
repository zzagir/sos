i = 1
function next() {
  let img1 = document.querySelector(".slider-img-1");
  let img2 = document.querySelector(".slider-img-2");
  let img3 = document.querySelector(".slider-img-3");

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
    i = 0
  }
};

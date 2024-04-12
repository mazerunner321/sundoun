const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemC = document.querySelector("#elem_container");
let fixedImg = document.getElementById("fixed_image");

elemC.addEventListener("mouseenter", function () {
  fixedImg.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixedImg.style.display = "none";
});

let allElems = document.querySelectorAll(".elem");

allElems.forEach((elem, i) =>
  elem.addEventListener("mouseenter", function () {
    let image = elem.getAttribute("data-image");
    fixedImg.style.backgroundImage = `url(${image})`;
  })
);

//---------------
function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}

swiperJs();

// ------------- Loader ------------

let loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 7000);

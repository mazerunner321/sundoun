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

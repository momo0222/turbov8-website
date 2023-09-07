const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav")
menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
});
//js for video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
var sliderNav = function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active")
    })
    slides.forEach((slide)=>{
        slide.classList.remove("active")
    })
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    });
});
let valueDisplays = document.querySelectorAll(".num");
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let duration =50;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let counter = setInterval(function () {
    if(endValue <=500){
        startValue+=1;
      }else if(endValue<=1000){
        startValue+=10;
      }else{
        startValue+=20;
      }
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const seasons = document.querySelector(".seasons-btn");
const subMenu = document.querySelector(" .sub-menu-wrap")
function toggleMenu(){
  subMenu.classList.add("sub-menu-open");
};
function closeMenu(){
  subMenu.classList.remove("sub-menu-open");
};
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 1040px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction)


          
//robot.html
let slideIndex = 1;

showSlide(slideIndex);

document.getElementById("prev-slide").addEventListener("click", () => {
    showSlide(slideIndex -= 1);
});

document.getElementById("next-slide").addEventListener("click", () => {
    showSlide(slideIndex += 1);
});

function showSlide(n) {
    let slides = document.getElementsByClassName("robot-slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

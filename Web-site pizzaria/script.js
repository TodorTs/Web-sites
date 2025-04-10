let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

console.log(menu);
console.log(navbar)

menu.addEventListener("click", () => {
    console.log('x')
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open'); 
});
//
$(document).ready(function(){
    $(window).bind('scroll', function(){
    var gap = 50;
    if($(window).scrollTop() > gap){
    $('header').addClass('active');
    }else{
    $('header').removeClass('active');
    }
    });
})





//
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
//cloring icon - menu
const text = document.getElementById('myText');

text.addEventListener('click', function() {
  text.classList.toggle('clicked');
});
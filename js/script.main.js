
$('.navigatsiya div').on('click', () => {
  $('.navigatsiya div').toggleClass('active');
  $('.navigatsiya nav').toggleClass('open');
  $('.navigatsiya nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".navigatsiya ul li").length; a++) {
  $(".navigatsiya ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}

/*Slider*/
let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
  showSlides(slideIndex += 1);
}
function previousSlide() {
  showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
   
  if (n > slides.length) {
  slideIndex = 1
  }
  if (n < 1) {
  slideIndex = slides.length
  }
   
  for (let slide of slides) {
  slide.style.display = "none";
  }  
  slides[slideIndex - 1].style.display = "block";  
}
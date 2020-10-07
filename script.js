/*JS Header */
const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');


document.body.addEventListener('click', (e) => {
    if (e.target !== mobileBurger && e.target !== mobileBurgerButton && mobileBurger.style.display === 'flex') { mobileBurger.style.display = 'none'};
});


mobileBurgerButton.addEventListener('click', () => {
    mobileBurger.style.display = 'flex';
});
/*JS Home Page */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}



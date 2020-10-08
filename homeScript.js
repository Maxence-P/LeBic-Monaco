// header

const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');
const wrapperHeader = document.querySelector('.header-wrapper');
const wrapperHeaderMobile = document.querySelector('.mobile-header');

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        wrapperHeader.style.opacity = .8;
        wrapperHeaderMobile.style.opacity = .8;
        mobileBurger.style.opacity = .8;
    } else {
        wrapperHeader.style.opacity = 1;
        wrapperHeaderMobile.style.opacity = 1;
        mobileBurger.style.opacity = 1;
    };
};

document.addEventListener('click', (e) => {
    if (e.target !== mobileBurger && e.target !== mobileBurgerButton && mobileBurger.style.display === 'flex') { 
        mobileBurger.style.display = 'none';
        mobileBurgerButton.src = 'src/burger.png';
        wrapperHeaderMobile.style.boxShadow = "0px 5px 4px 0px rgba(80, 80, 80, 0.75)";
    };
});

mobileBurgerButton.addEventListener('click', () => {
    if (mobileBurger.style.display === 'none' || mobileBurger.style.display === '') {
        mobileBurger.style.display = 'flex';
        mobileBurgerButton.src = 'src/close.png';
        wrapperHeaderMobile.style.boxShadow = "none";
        return;
    };
    mobileBurger.style.display = 'none';
    mobileBurgerButton.src = 'src/burger.png';
    wrapperHeaderMobile.style.boxShadow = "0px 5px 4px 0px rgba(80, 80, 80, 0.75)";
});

// carou

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
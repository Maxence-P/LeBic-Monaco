
const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');


document.body.addEventListener('click', (e) => {
    if (e.target !== mobileBurger && e.target !== mobileBurgerButton && mobileBurger.style.display === 'flex') { mobileBurger.style.display = 'none'};
});


mobileBurgerButton.addEventListener('click', () => {
    mobileBurger.style.display = 'flex';
});






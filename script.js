const mobileBurger = document.querySelector('.mobile-menuOpen');
const mobileBurgerButton = document.querySelector('#burger-buttom');
const interetMonument = document.querySelector('.monument-button');
const interetAdresse = document.querySelector('.adresses-button');
const interetActivity = document.querySelector('.activity-button');
const wrapperActivity = document.querySelectorAll('.wrapper-activity');
const wrapperMonument = document.querySelectorAll('.wrapper-monument');
const wrapperAdresse = document.querySelectorAll('.wrapper-adresses');
const wrapperHeader = document.querySelector('.header-wrapper');
const wrapperHeaderMobile = document.querySelector('.mobile-header');

const interet = {
    monument: true,
    goodAdresse: true,
    activity: true,
};

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

const setdisplay = (div, dis) => {div[0].style.display = dis; div[1].style.display = dis; };

interetMonument.addEventListener('click', () => {
    interet.monument = !interet.monument;
    if (interet.monument) { return setdisplay(wrapperMonument, 'flex'); };
    setdisplay(wrapperMonument, 'none');    
})

interetAdresse.addEventListener('click', () => {
    interet.goodAdresse = !interet.goodAdresse;
    if (interet.goodAdresse) { return setdisplay(wrapperAdresse, 'flex'); };
    setdisplay(wrapperAdresse, 'none');
})

interetActivity.addEventListener('click', () => {
    interet.activity = !interet.activity;
    if (interet.activity) { return setdisplay(wrapperActivity, 'flex'); };
    setdisplay(wrapperActivity, 'none');
});